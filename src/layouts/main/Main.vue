<!-- =========================================================================================
    File Name: Main.vue
    Description: Main layout
    ----------------------------------------------------------------------------------------
    Item Name: Hacoupian - Technology Dep.
    Author: Ahmadreza Azizan

========================================================================================== -->


<template>
  <div
    class="layout--main"
    :class="[layoutTypeClass, navbarClasses, footerClasses, {'app-page': isAppPage}]"
  >
    <a-layout style="min-height: 100vh">
      <a-layout-sider
        breakpoint="lg"
        :trigger="null"
        @breakpoint="onBreackpoint"
        reverseArrow="true"
      >
        <div class="flex flex-col h-full">
          <div class="text-center py-4 text-white">HACOUPIAN</div>
          <div class="flex-1">
            <HorizontalMenu :model="navMenuItems" />
          </div>
          <div class="text-center text-white text-sm">نسخه 0.8</div>
        </div>
      </a-layout-sider>

      <a-layout>
        <ALayoutHeader class="px-2">
          <div class="flex items-center justify-center">
            <div class="cursor-pointer ml-4 mr-2" v-if="!isLg">
              <i-menu-unfold
                size="1.5em"
                v-if="!collapsed"
                @click="() => (collapsed = !collapsed)"
              />
              <i-menu-fold size="1.5em" v-else @click="() => (collapsed = !collapsed)" />
            </div>
            <a-button type="dashed"></a-button>
            <a-breadcrumb style="margin: 16px 0" class="flex-1">
              <a-breadcrumb-item class="font-bold">داشبرد</a-breadcrumb-item>
            </a-breadcrumb>
            <div class="grid grid-flow-col gap-3">
              <AButton type="danger">
                <div class="flex items-center">
                  <i-accept-email class="flex items-center" size="1.2em" />
                </div>
              </AButton>
              <AButton type="primary">
                <div class="flex items-center">
                  <i-alarm class="flex items-center" size="1.2em" />
                </div>
              </AButton>
              <AButton type="primary" ghost>
                <div class="flex items-center">
                  <i-user class="flex items-center" size="1.2em  " />
                  <span class="mx-2 flex">{{ $t('field.profile') }}</span>
                  <i-down class="flex" size="1.2em" />
                </div>
              </AButton>
            </div>
          </div>
        </ALayoutHeader>
        <ALayoutContent class="m-4 relative">
          <router-view v-slot="{ Component }">
            <transition name="scale-slide">
              <component :is="Component" />
            </transition>
          </router-view>
        </ALayoutContent>
      </a-layout>
    </a-layout>
  </div>
</template>


<script lang="ts">
import { ref } from "vue";
import HorizontalMenu from "@/layouts/components/horizontal-nav-menu/HorizontalMenu.vue";
import navMenuItems from "@/menus";
import TheFooter from "@/layouts/components/TheFooter.vue";
import themeConfig from "@/../themeConfig";
import logo from "@/assets/images/logo/logo.png";

export default {
  components: {
    TheFooter,
    HorizontalMenu
  },
  data() {
    return {
      disableCustomizer: themeConfig.disableCustomizer,
      disableThemeTour: themeConfig.disableThemeTour,
      footerType: themeConfig.footerType || "static",
      hideScrollToTop: themeConfig.hideScrollToTop,
      isNavbarDark: false,
      navbarColor: themeConfig.navbarColor || "#fff",
      navbarType: themeConfig.navbarType || "floating",
      navMenuItems,
      navMenuLogo: logo,
      routerTransition: themeConfig.routerTransition || "none",
      routeTitle: this.$route.meta.pageTitle
    };
  },
  watch: {
    $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark(val) {
      const color = this.navbarColor == "#fff" && val ? "#10163a" : "#fff";
      this.updateNavbarColor(color);
    },
    "$store.state.mainLayoutType"(val) {
      this.setNavMenuVisibility(val);
      this.disableThemeTour = true;
    },
    windowWidth(val) {
      if (val < 1200) this.disableThemeTour = true;
    },
    verticalNavMenuWidth() {
      this.disableThemeTour = true;
    }
  },
  computed: {
    bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    isLg() {
      return this.$store.getters.isLg;
    },
    contentAreaClass() {
      if (this.mainLayoutType === "vertical") {
        if (this.verticalNavMenuWidth == "default")
          return "content-area-reduced";
        else if (this.verticalNavMenuWidth == "reduced")
          return "content-area-lg";
      }
      // else if(this.mainLayoutType === "boxed") return "content-area-reduced"
      else return "content-area-full";
    },
    footerClasses() {
      return {
        "footer-hidden": this.footerType == "hidden",
        "footer-sticky": this.footerType == "sticky",
        "footer-static": this.footerType == "static"
      };
    },
    isAppPage() {
      return this.$route.path.includes("/apps/") ? true : false;
    },
    isThemeDark() {
      return this.$store.state.theme == "dark";
    },
    layoutTypeClass() {
      return `main-${this.mainLayoutType}`;
    },
    mainLayoutType() {
      return this.$store.state.mainLayoutType;
    },
    navbarClasses() {
      return {
        "navbar-hidden": this.navbarType == "hidden",
        "navbar-sticky": this.navbarType == "sticky",
        "navbar-static": this.navbarType == "static",
        "navbar-floating": this.navbarType == "floating"
      };
    },
    verticalNavMenuWidth() {
      return this.$store.state.verticalNavMenuWidth;
    },
    windowWidth() {
      return this.$store.state.windowWidth;
    }
  },
  methods: {
    changeRouteTitle(title) {
      this.routeTitle = title;
    },
    onBreackpoint(broken) {
      console.log("broken ==> ", broken);
    },
    updateNavbar(val) {
      if (val == "static") this.updateNavbarColor("#fff");
      this.navbarType = val;
    },
    updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;
      else this.isNavbarDark = true;
    },
    updateFooter(val) {
      this.footerType = val;
    },
    updateRouterTransition(val) {
      this.routerTransition = val;
    },
    setNavMenuVisibility(layoutType) {
      if (
        (layoutType === "horizontal" && this.windowWidth >= 1200) ||
        (layoutType === "vertical" && this.windowWidth < 1200)
      ) {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", false);
        this.$store.dispatch("updateVerticalNavMenuWidth", "no-nav-menu");
      } else {
        this.$store.commit("TOGGLE_IS_VERTICAL_NAV_MENU_ACTIVE", true);
      }
    },
    toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(["1"]),
      collapsedWidth: ref<number>(0),
      collapsed: ref<boolean>(false)
    };
  }
};
</script>

<style scoped>
.ant-layout-header {
  background-color: white;
}
</style>
