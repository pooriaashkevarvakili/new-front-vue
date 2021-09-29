/*=========================================================================================
  File Name: router.js
  Description: Routes for vue-router. Lazy loading is enabled.
  Object Strucutre:
                    path => router path
                    name => router name
                    component(lazy loading) => component to load
                    meta : {
                      rule => which user can have access (ACL)
                      breadcrumb => Add breadcrumb to specific page
                      pageTitle => Display title besides breadcrumb
                    }
  ----------------------------------------------------------------------------------------
  Item Name: Hacoupian - Technology Dep.
  Author: Ahmadreza Azizan

==========================================================================================*/

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, position) {
    return { top: 0 };
  },
  routes: [
    {
      // =============================================================================
      // MAIN LAYOUT ROUTES
      // =============================================================================
      path: "/",
      component: () => import("./layouts/main/Main.vue"),
      redirect: "/dashboard",
      children: [
        // =============================================================================
        // Admin Routes
        // =============================================================================
        {
          path: "/dashboard",
          name: "dashboard",
          component: () => import("./views/admin/Dashboard.vue"),
        },
        {
          path: "/workspace",
          name: "workspace",
          component: () => import("./views/admin/Workspace.vue"),
        },
        {
          path: "/job-offer",
          name: "joboffer",
          component: () => import("./views/admin/joboffer.vue"),
        },
        {
          path: "/applicant",
          name: "applicant",
          component: () => import("./views/admin/applicant.vue"),
        },
        {
          path: "/resume",
          name: "resume",
          component: () => import("./views/admin/resume.vue"),
        },
        {
          path: "/mailroom",
          name: "mailroom",
          component: () => import("./views/admin/mailroom.vue"),
        },

        {
          path: "/gishetabs",
          name: "gishetabs",
          component: () => import("./views/admin/mailroom/GisheTabs.vue"),
        },
        {
          path: "/:catchAll(.*)",
          name: "notfound-main",
          component: () => import("./views/admin/404.vue"),
        },
      ],
    },
    // =============================================================================
    // FULL PAGE LAYOUTS
    // =============================================================================
    {
      path: "/auth",
      component: () => import("./layouts/full-page/FullPage.vue"),
      children: [
        // =============================================================================
        // PAGES
        // =============================================================================
        {
          path: "/auth/login",
          name: "login",
          component: () => import("@/views/pages/Login.vue"),
        },
      ],
    },
    {
      path: "/404",
      name: "page-error-404",
      component: () => import("@/views/pages/Error404.vue"),
    },
    // Redirect to 404 page, if no match found
    {
      path: "/:catchAll(.*)",
      redirect: "/404",
    },
  ],
});

router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById("loading-bg");
  if (appLoading) {
    appLoading.style.display = "none";
  }
});

export default router;
