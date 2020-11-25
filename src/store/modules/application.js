import axios from "axios";
export default {
  state: {
    EApplicationStatus: [],
    //loginError: null,
    //processing: false,
  },
  getters: {
    EApplicationStatus: state => state.EApplicationStatus,
    //processing: state => state.processing,
    //loginError: state => state.loginError,
  },
  mutations: {
    setEApplicationStatus(state, payload) {
      state.EApplicationStatus = payload;
      state.processing = false;
      state.loginError = null;
    },
    setProcessing(state, payload) {
      state.processing = payload;
      state.loginError = null;
    },
    setError(state, payload) {
      state.loginError = payload;
      state.EApplicationStatus = null;
      state.processing = false;
    },
    clearError(state) {
      state.loginError = null;
    }
  },
  actions: {

    async getApplicationStatus({commit, dispatch}){
      commit("clearError");
      commit("setProcessing", true);
      let response = await axios.get('/application/status');
      let videos = response.data.data;
      // videos.forEach(v => {
      //   v.attributes.tag_ids = v.relationships.tags.data.map(t => t.id);
      // });

      commit('setEApplicationStatus', videos);
    },
    // login({ commit }, payload) {
    //   commit("clearError");
    //   commit("setProcessing", true);

    // },

    // resetPassword({ commit }, payload) {
    //   commit("clearError");
    //   commit("setProcessing", true);
    //   firebase
    //     .auth()
    //     .confirmPasswordReset(payload.resetPasswordCode, payload.newPassword)
    //     .then(
    //       user => {
    //         commit("clearError");
    //         commit("setResetPasswordSuccess");
    //       },
    //       err => {
    //         commit("setError", err.message);
    //         setTimeout(() => {
    //           commit("clearError");
    //         }, 3000);
    //       }
    //     );
    // },

    // signOut({ commit }) {

    //     axios
    //     .delete("/token")
    //     .then(response => {
    //       console.log(response)
    //       setCurrentUser(null);
    //       commit("setLogout");
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });    

    // },
    // REFRESH_TOKEN: () => {
    //   return new Promise((resolve, reject) => {
    //     axios
    //       .post("/users/refresh")
    //       .then(response => {
    //         console.log("ddd");
    //         console.log(response);
    //         resolve(response);
    //       })
    //       .catch(error => {
    //         reject(error);
    //       });
    //   });
    // }
  }
};
