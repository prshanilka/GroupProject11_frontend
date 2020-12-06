import { UserRole } from "../utils/auth.roles";

export const defaultMenuType = "menu-default"; // 'menu-default', 'menu-sub-hidden', 'menu-hidden';
export const adminRoot = "/app";
export const elderRoot = "/elder";
export const sysAdminRoot = "/sysadmin";
export const dofficerRoot = "/dofficer";

export const searchPath = `${adminRoot}/pages/miscellaneous/search`;
export const buyUrl = "https://1.envato.market/nEyZa";
export const apiUrl = "https://api.coloredstrategies.com";


//export const bUrl ="https://elderallowanceuor.ga/api";
export const bUrl ="http://localhost:3000/api";
export const subHiddenBreakpoint = 1440;
export const menuHiddenBreakpoint = 768;

export const defaultLocale = "English";
export const defaultDirection = "ltr";
export const localeOptions = [
  { id: "සිංහල", name: "සිංහල", direction: "ltr" },
  { id: "தமிழ்", name: "தமிழ்", direction: "ltr" },
  { id: "en", name: "English", direction: "ltr" },
  { id: "enrtl", name: "English RTL", direction: "rtl" }
];

export const ElderAllowancelocaleOptions = [
  { id: "සිංහල", name: "සිංහල" },
  { id: "தமிழ்", name: "தமிழ்" },
  { id: "English", name: "English" }
];

export const firebaseConfig = {
  apiKey: "AIzaSyDe94G7L-3soXVSpVbsYlB5DfYH2L91aTU",
  authDomain: "piaf-vue-login.firebaseapp.com",
  databaseURL: "https://piaf-vue-login.firebaseio.com",
  projectId: "piaf-vue-login",
  storageBucket: "piaf-vue-login.appspot.com",
  messagingSenderId: "557576321564",
  appId: "1:557576321564:web:bc2ce73477aff5c2197dd9"
};

export const currentUser = {
  id: 1,
  title: "Sarah Kortney",
  img: "/assets/img/profiles/def.png",
  date: "Last seen today 15:24",
  role: UserRole.Admin
};

export const isAuthGuardActive = true;
export const themeRadiusStorageKey = "theme_radius";
export const themeSelectedColorStorageKey = "theme_selected_color";
export const defaultColor = "light.blueolympic";
export const colors = [
  "bluenavy",
  "blueyale",
  "blueolympic",
  "greenmoss",
  "greenlime",
  "purplemonster",
  "orangecarrot",
  "redruby",
  "yellowgranola",
  "greysteel"
];
