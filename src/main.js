import Vue from "vue";
import App from "./App";

// BootstrapVue add
import BootstrapVue from "bootstrap-vue";
// Router & Store add
import router from "./router";
import store from "./store";
// Multi Language Add
import en from "./locales/en.json";
import sinhala from "./locales/sinhala.json";
import tamil from "./locales/tamil.json";
import VueI18n from "vue-i18n";
import { firebaseConfig } from "./constants/config";
// Notification Component Add
import Notifications from "./components/Common/Notification";
// Breadcrumb Component Add
import Breadcrumb from "./components/Common/Breadcrumb";
// RefreshButton Component Add
import RefreshButton from "./components/Common/RefreshButton";
// Colxx Component Add
import Colxx from "./components/Common/Colxx";
// Perfect Scrollbar Add
import vuePerfectScrollbar from "vue-perfect-scrollbar";
import contentmenu from "v-contextmenu";
import VueLineClamp from "vue-line-clamp";
import VueScrollTo from "vue-scrollto";
import firebase from "firebase/app";
import "firebase/auth";
import { getCurrentLanguage } from "./utils";
import axios from 'axios';
axios.defaults.baseURL='http://localhost:3000/api/';
 let isRefreshing = false;
 
axios.interceptors.response.use(
  async response => {
     return response;
   },
   async err => {
     const {
       config,
       response: { status, data }
     } = err;
 
     const originalRequest = config;
     
     if (data.message === "Missing token") {
       router.push({ name: "login" });
       return Promise.reject(false);
     }
     if (data.message === "Invalid Refresh Token") {
       router.push({ name: "login" });
       return Promise.reject(false);
     }
  
     if (originalRequest.url.includes("login_check")) {
       return Promise.reject(err);
     }
 
     if (status === 401 && data.trefresh === 1) {
       if (!isRefreshing) {
         isRefreshing = true;
        await store
           .dispatch("REFRESH_TOKEN")
           .then(({ status , data }) => {
             if (status === 200 || status == 204) {
               localStorage.jwt=data.token;
               isRefreshing = false;
             }
           })
           .catch(error => {
            router.push({ name: "login" });
             console.error(error);
             return Promise.reject(false);
           });
       }
      return  new Promise(resolve => {
           resolve(axios(originalRequest));

       });
     }
   }
 );
 


axios.interceptors.request.use(function(config) {
    if(config.url == "/users/refresh"){
      config.headers.Authorization = `Bearer ${localStorage.jwtr}`;
      return config;
    }
    if(localStorage.jwt){
      config.headers.Authorization = `Bearer ${localStorage.jwt}`;
      return config;
    }
    
    
  }, function(err) {
    return Promise.reject(err);
  });
  

Vue.use(BootstrapVue);
Vue.use(VueI18n);
const messages = { en: en, සිංහල: sinhala, தமிழ்: tamil };
const locale = getCurrentLanguage();
const i18n = new VueI18n({
  locale: locale,
  fallbackLocale: "en",
  messages
});
Vue.use(Notifications);
Vue.use(require("vue-shortkey"));
Vue.use(contentmenu);
Vue.use(VueScrollTo);
Vue.use(VueLineClamp, {
  importCss: true
});

Vue.component("piaf-breadcrumb", Breadcrumb);
Vue.component("b-refresh-button", RefreshButton);
Vue.component("b-colxx", Colxx);
Vue.component("vue-perfect-scrollbar", vuePerfectScrollbar);

firebase.initializeApp(firebaseConfig);
Vue.config.productionTip = false;

export default new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount("#app");
