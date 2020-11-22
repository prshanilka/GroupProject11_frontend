import firebase from "firebase/app";
import "firebase/auth";
import { currentUser, isAuthGuardActive } from "../../constants/config";
import { setCurrentUser, getCurrentUser } from "../../utils";
import bapi from "../../api/auth";
import axios from "axios";
export default {
  state: {
    currentUser:
      localStorage.getItem("user") != null ? getCurrentUser() : currentUser,
    loginError: null,
    processing: false,
    forgotMailSuccess: null,
    resetPasswordSuccess: null
  },
  getters: {
    currentUser: state => state.currentUser,
    processing: state => state.processing,
    loginError: state => state.loginError,
    forgotMailSuccess: state => state.forgotMailSuccess,
    resetPasswordSuccess: state => state.resetPasswordSuccess
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
      state.processing = false;
      state.loginError = null;
    },
    setLogout(state) {
      state.currentUser = null;
      state.processing = false;
      state.loginError = null;
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.currentUser = null;
      state.processing = false;
    },
    setForgotMailSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.forgotMailSuccess = true;
    },
    setResetPasswordSuccess(state) {
      state.loginError = null;
      state.currentUser = null;
      state.processing = false;
      state.resetPasswordSuccess = true;
    },
    clearError(state) {
      state.loginError = null;
    }
  },
  actions: {
    login({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);

      /*
    firebase
        .auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            const item = { uid: "OZoBsVqoWbYEflHa3HPeppVS9p02", ...currentUser }
            console.log(typeof item);
            console.log(item);
            setCurrentUser(item)
            commit('setUser', item)
          },
          err => {
            setCurrentUser(null);
            commit('setError', err.message)
            setTimeout(() => {
              commit('clearError')
            }, 3000)
          }
        )
       

      axios.post('http://localhost/a.php', 
      {
        email: payload.email,
        password: payload.password

      })
      
      */

      const ddd = {
        username: payload.email,
        password: payload.password
      };
      bapi.auth(ddd, (err, results) => {
        console.log("sadsad");
        if (err) {
          setCurrentUser(null);
          console.log("ssss");
          console.log(err);
          commit("setError", err.message);
          setTimeout(() => {
            commit("clearError");
          }, 3000);
        }
        if (results) {
          console.log("dddd");
          //console.log(currentUser)
          const item = { uid: "${ results.id }", ...results };

          setCurrentUser(item);
          commit("setUser", item);
        }
      });

      // axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(response =>console.log(response));
    },
    forgotPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      firebase
        .auth()
        .sendPasswordResetEmail(payload.email)
        .then(
          user => {
            commit("clearError");
            commit("setForgotMailSuccess");
          },
          err => {
            commit("setError", err.message);
            setTimeout(() => {
              commit("clearError");
            }, 3000);
          }
        );
    },
    resetPassword({ commit }, payload) {
      commit("clearError");
      commit("setProcessing", true);
      firebase
        .auth()
        .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
        .then(
          user => {
            commit("clearError");
            commit("setResetPasswordSuccess");
          },
          err => {
            commit("setError", err.message);
            setTimeout(() => {
              commit("clearError");
            }, 3000);
          }
        );
    },

    signOut({ commit }) {

        axios
        .delete("/token")
        .then(response => {
          console.log(response)
          setCurrentUser(null);
          commit("setLogout");
        })
        .catch(error => {
          console.log(error);
        });    














      /*
      firebase
        .auth()
        .signOut()
        .then(
          () => {
            setCurrentUser(null);
            commit("setLogout");
          },
          _error => {}
        ); */
    },
    REFRESH_TOKEN: () => {
      return new Promise((resolve, reject) => {
        axios
          .post("/users/refresh")
          .then(response => {
            console.log("ddd");
            console.log(response);
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
