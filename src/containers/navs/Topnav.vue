<template>
  <nav class="navbar fixed-top">
    <div class="d-flex align-items-center navbar-left">
      <a
        href="#"
        class="menu-button d-none d-md-block"
        @click.prevent.stop="changeSideMenuStatus({step :menuClickCount+1,classNames:menuType,selectedMenuHasSubItems})"
      >
        <menu-icon />
      </a>
      <a
        href="#"
        class="menu-button-mobile d-xs-block d-sm-block d-md-none"
        @click.prevent.stop="changeSideMenuForMobile(menuType)"
      >
        <mobile-menu-icon />
      </a>
      <div
        :class="{'search':true, 'mobile-view':isMobileSearch}"
        ref="searchContainer"
        @mouseenter="isSearchOver=true"
        @mouseleave="isSearchOver=false"
      >
        <b-input
          :placeholder="$t('menu.search')"
          @keypress.native.enter="search"
          v-model="searchKeyword"
        />
        <span class="search-icon" @click="searchClick">
          <i class="simple-icon-magnifier"></i>
        </span>
      </div>
      <div class="d-inline-block">
        <b-dropdown
          id="langddm"
          class="ml-2"
          variant="light"
          size="sm"
          toggle-class="language-button"
        >
          <template slot="button-content">
            <span class="name">{{$i18n.locale.toUpperCase()}}</span>
          </template>
          <b-dropdown-item
            v-for="(l,index) in localeOptions"
            :key="index"
            @click="changeLocale(l.id, l.direction)"
          >{{l.name}}</b-dropdown-item>
        </b-dropdown>
      </div>
      <div class="position-relative d-none d-none d-lg-inline-block">
        <a
          class="btn btn-outline-primary btn-sm ml-2"
          target="_top"
          :href="buyUrl"
        >{{$t('user.buy')}}</a>
      </div>
    </div>
    <router-link class="navbar-logo" tag="a" :to="adminRoot">
      <span class="logo d-none d-xs-block"></span>
      <span class="logo-mobile d-block d-xs-none"></span>
    </router-link>

    <div class="navbar-right">
      <div class="d-none d-md-inline-block align-middle mr-3">
        <switches
          id="tool-mode-switch"
          v-model="isDarkActive"
          theme="custom"
          class="vue-switcher-small"
          color="primary"
        />
        <b-tooltip target="tool-mode-switch" placement="left" title="Dark Mode"></b-tooltip>
      </div>
      <div class="header-icons d-inline-block align-middle">
        <div class="position-relative d-none d-sm-inline-block">
          <b-dropdown
            variant="empty"
            size="sm"
            right
            toggle-class="header-icon"
            menu-class="position-absolute mt-3 iconMenuDropdown"
            no-caret
          >
            <template slot="button-content">
              <i class="simple-icon-grid" />
            </template>
            <div>
              <router-link tag="a" :to="`${adminRoot}/dashboards/default`" class="icon-menu-item">
                <i class="iconsminds-shop-4 d-block" />
                {{$t('menu.dashboards')}}
              </router-link>
              <router-link tag="a" :to="`${adminRoot}/ui`" class="icon-menu-item">
                <i class="iconsminds-pantone d-block" />
                {{$t('menu.ui')}}
              </router-link>
              <router-link tag="a" :to="`${adminRoot}/ui/components/charts`" class="icon-menu-item">
                <i class="iconsminds-bar-chart-4 d-block" />
                {{$t('menu.charts')}}
              </router-link>
              <router-link tag="a" :to="`${adminRoot}/applications/chat`" class="icon-menu-item">
                <i class="iconsminds-speach-bubble d-block" />
                {{$t('menu.chat')}}
              </router-link>
              <router-link tag="a" :to="`${adminRoot}/applications/survey`" class="icon-menu-item">
                <i class="iconsminds-formula d-block" />
                {{$t('menu.survey')}}
              </router-link>
              <router-link tag="a" :to="`${adminRoot}/applications/todo`" class="icon-menu-item">
                <i class="iconsminds-check d-block" />
                {{$t('menu.todo')}}
              </router-link>
            </div>
          </b-dropdown>
        </div>

        <div class="position-relative d-inline-block">
          <b-dropdown
            variant="empty"
            size="sm"
            right
            toggle-class="header-icon notificationButton"
            menu-class="position-absolute mt-3 notificationDropdown"
            no-caret
          >
            <template slot="button-content">
              <i class="simple-icon-bell" />
              <span class="count">3</span>
            </template>
            <vue-perfect-scrollbar :settings="{ suppressScrollX: true, wheelPropagation: false }">
              <div
                class="d-flex flex-row mb-3 pb-3 border-bottom"
                v-for="(n,index) in notifications"
                :key="index"
              >
                <router-link tag="a" :to="`${adminRoot}/pages/product/details`">
                  <img
                    :src="n.img"
                    :alt="n.title"
                    class="img-thumbnail list-thumbnail xsmall border-0 rounded-circle"
                  />
                </router-link>
                <div class="pl-3 pr-2">
                  <router-link tag="a" :to="`${adminRoot}/pages/product/details`">
                    <p class="font-weight-medium mb-1">{{n.title}}</p>
                    <p class="text-muted mb-0 text-small">{{n.date}}</p>
                  </router-link>
                </div>
              </div>
            </vue-perfect-scrollbar>
          </b-dropdown>
        </div>
        <div class="position-relative d-none d-sm-inline-block">
          <div class="btn-group">
            <b-button variant="empty" class="header-icon btn-sm" @click="toggleFullScreen">
              <i
                :class="{'d-inline-block':true,'simple-icon-size-actual':fullScreen,'simple-icon-size-fullscreen':!fullScreen }"
              />
            </b-button>
          </div>
        </div>
      </div>
      <div class="user d-inline-block">
        <b-dropdown
          class="dropdown-menu-right"
          right
          variant="empty"
          toggle-class="p-0"
          menu-class="mt-3"
          no-caret
        >
          <template slot="button-content">
            <span class="name mr-1">{{currentUser.title}}</span>
            <span>
              <img :alt="currentUser.title" :src="currentUser.img" />
            </span>
          </template>
          <b-dropdown-item>Account</b-dropdown-item>
          <b-dropdown-item>Features</b-dropdown-item>
          <b-dropdown-item>History</b-dropdown-item>
          <b-dropdown-item>Support</b-dropdown-item>
          <b-dropdown-divider />
          <b-dropdown-item @click="logout">Sign out</b-dropdown-item>
        </b-dropdown>
      </div>
    </div>
  </nav>
</template>

<script>
import Switches from "vue-switches";
import notifications from "../../data/notifications";

import { mapGetters, mapMutations, mapActions } from "vuex";
import { MenuIcon, MobileMenuIcon } from "../../components/Svg";
import {
  searchPath,
  menuHiddenBreakpoint,
  localeOptions,
  buyUrl,
  adminRoot
} from "../../constants/config";
import { getDirection, setDirection, getThemeColor, setThemeColor } from "../../utils";
export default {
  components: {
    "menu-icon": MenuIcon,
    "mobile-menu-icon": MobileMenuIcon,
    switches: Switches
  },
  data() {
    return {
      searchKeyword: "",
      isMobileSearch: false,
      isSearchOver: false,
      fullScreen: false,
      menuHiddenBreakpoint,
      searchPath,
      adminRoot,
      localeOptions,
      buyUrl,
      notifications,
      isDarkActive: false
    };
  },
  methods: {
    ...mapMutations(["changeSideMenuStatus", "changeSideMenuForMobile"]),
    ...mapActions(["setLang", "signOut"]),
    search() {
      this.$router.push(`${this.searchPath}?search=${this.searchKeyword}`);
      this.searchKeyword = "";
    },
    searchClick() {
      if (window.innerWidth < this.menuHiddenBreakpoint) {
        if (!this.isMobileSearch) {
          this.isMobileSearch = true;
        } else {
          this.search();
          this.isMobileSearch = false;
        }
      } else {
        this.search();
      }
    },
    handleDocumentforMobileSearch() {
      if (!this.isSearchOver) {
        this.isMobileSearch = false;
        this.searchKeyword = "";
      }
    },

    changeLocale(locale, direction) {
      const currentDirection = getDirection().direction;
      if (direction !== currentDirection) {
        setDirection(direction);
      }

      this.setLang(locale);
    },
    logout() {
      this.signOut().then(() => {
        this.$router.push("/user/login");
      });
    },

    toggleFullScreen() {
      const isInFullScreen = this.isInFullScreen();

      var docElm = document.documentElement;
      if (!isInFullScreen) {
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
      this.fullScreen = !isInFullScreen;
    },
    isInFullScreen() {
      return (
        (document.fullscreenElement && document.fullscreenElement !== null) ||
        (document.webkitFullscreenElement &&
          document.webkitFullscreenElement !== null) ||
        (document.mozFullScreenElement &&
          document.mozFullScreenElement !== null) ||
        (document.msFullscreenElement && document.msFullscreenElement !== null)
      );
    }
  },
  computed: {
    ...mapGetters({
      currentUser: "currentUser",
      menuType: "getMenuType",
      menuClickCount: "getMenuClickCount",
      selectedMenuHasSubItems: "getSelectedMenuHasSubItems"
    })
  },
  beforeDestroy() {
    document.removeEventListener("click", this.handleDocumentforMobileSearch);
  },
  created() {
    const color = getThemeColor();
    this.isDarkActive = color.indexOf("dark") > -1;
  },
  watch: {
    "$i18n.locale"(to, from) {
      if (from !== to) {
        this.$router.go(this.$route.path);
      }
    },
    isDarkActive(val) {
      let color = getThemeColor();
      let isChange = false;
      if (val && color.indexOf("light") > -1) {
        isChange = true;
        color = color.replace("light", "dark");
      } else if (!val && color.indexOf("dark") > -1) {
        isChange = true;
        color = color.replace("dark", "light");
      }
      if (isChange) {
        setThemeColor(color);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      }
    },
    isMobileSearch(val) {
      if (val) {
        document.addEventListener("click", this.handleDocumentforMobileSearch);
      } else {
        document.removeEventListener(
          "click",
          this.handleDocumentforMobileSearch
        );
      }
    }
  }
};
</script>
