import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import { adminRoot, elderRoot } from "./constants/config";
import { UserRole } from "./utils/auth.roles";

Vue.use(VueRouter);

const routes = [
  ///////////////////////////////////////////////////
  // elder Routes

  {
    path: elderRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/elder"),
    redirect: `${elderRoot}/dashboards`,
    meta: { loginRequired: true },
    /*
    define with Authorization :
    meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
    */
    children: [
      {
        path: "dashboards",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/elder/dashboards"
          ),
        redirect: `${elderRoot}/dashboards/default`,
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
        children: [
          {
            path: "default",
            component: () =>
              import(
                /* webpackChunkName: "dashboards" */ "./views/elder/dashboards/Default"
              )
            // meta: { roles: [UserRole.Admin] },
          }
        ]
      },

      {
        path: "/elderlayout/elder",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/Layout-check/Elder-layout"
          )
      },
      {
        path: "/elderlogin",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/login"
          )
      },

      {
        path: "/elder/elder-form",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/elderfrom"
          )
      },
      {
        path: "/elder/agent-form",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/agent_form"
          )
      },

      {
        path: "/elder/elder-dashboard",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/elder_dashboard"
          )
      },

      {
        path: "/elder/elder-pament-details",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/elder_pament_details"
          )
      },

      {
        path: "/elder/reason-about-payments",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/submit_reason_about_payments"
          )
      },

      {
        path: "/elder/elder-list",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/elderlis"
          )
      }
    ]
  },

  /*

 {
          path: "/elderlayout/elder",
          component: () =>import(  "./views/elde-allowance-view/Layout-check/Elder-layout"),
          meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
        },
        {
          path: "/elderlogin",
          component: () =>
            import(
               "./views/elde-allowance-view/user/login"
            )
        },
      
        {
          path: "/elder/elder-form",
          component: () =>
            import(
             "./views/elde-allowance-view/user/elderfrom"
            )
        },
        {
          path: "/elder/agent-form",
          component: () =>
            import(
               "./views/elde-allowance-view/user/agent_form"
            )
        },
        {
          path: "/elder/elder-pament-details",
          component: () =>
            import(
              "./views/elde-allowance-view/user/elder_pament_details"
            )
        },
      
        {
          path: "/elder/reason-about-payments",
          component: () =>
            import(
               "./views/elde-allowance-view/user/submit_reason_about_payments"
            )
        },
      
        {
          path: "/elder/elder-list",
          component: () =>
            import(
              "./views/elde-allowance-view/user/elderlis"
            )
        },


*/

  //////////////////////
  // post office

  {
    path: "/post/post-officer-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/post_officer_dashboard"
      )
  },

  {
    path: "/post/lsit-of-elder-pyament",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/lsit_of_elder_pyament"
      )
  },
  {
    path: "/post/get-elder-detail-verification",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/get_elder_detail_verification"
      )
  },
  {
    path: "/post/elders-related-to-post-off",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/elders_related_to_post_off"
      )
  },
  {
    path: "/post/assign-post-officers",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/assign_officers"
      )
  },
  {
    path: "/post/send-reports",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/send_reports"
      )
  },

  {
    path: "/post/post-office",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/postoffice_form"
      )
  },

  {
    path: "/post/officer-post",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post office/postoffice_officer_form"
      )
  },

  ////////////////////////////////////////////////////
  // divisional rotes
  {
    path: "/division/district-office-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/district_office_form"
      )
  },

  {
    path: "/division/divisional-office-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/divisional_office_form"
      )
  },

  {
    path: "/division/divisional-office-officer",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/divisional_office_officer_form"
      )
  },
  ////

  {
    path: "/division/advance-serch-elders",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/advance_serch_elders"
      )
  },
  {
    path: "/division/assign-grama-niladari",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/assign_grama_niladari"
      )
  },
  {
    path: "/division/divisional-secretary-officer-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/divisional_secretary_officer_dashboard"
      )
  },
  {
    path: "/division/evaluate-elder-application",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/evaluate_elder_application"
      )
  },
  {
    path: "/division/get-reports",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/get_reports"
      )
  },
  {
    path: "/division/list-of-elders",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/list_of_elders"
      )
  },
  {
    path: "/division/list-of-grama-divisions",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/list_of_grama_divisions"
      )
  },
  {
    path: "/division/list-of-gramaniladari",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/list_of_gramaniladari"
      )
  },
  {
    path: "/division/list-of-post-office",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/list_of_post_office"
      )
  },
  {
    path: "/division/view-priority-list",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/view_priority_list"
      )
  },
  {
    path: "/division/view-benifisher-list",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional secretary/view_benifisher_list"
      )
  },

  //////////////////////////////////////////////
  //gramadivision routes

  {
    path: "/grama/gramaniladari-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/gramaniladari_dashboard"
      )
  },
  {
    path: "/grama/inform-death-of-elder",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/inform_death_of_elder"
      )
  },
  {
    path: "/grama/list-of-applicans",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/list_of_applicans"
      )
  },
  {
    path: "/grama/list-of-benifishers",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/list_of_benifishers"
      )
  },
  {
    path: "/grama/send-complains",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/send_complains"
      )
  },
  {
    path: "/grama/view-elder-application-verify",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/view_elder_application_verify"
      )
  },
  {
    path: "/grama/view-elder-details",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/view_elder_details"
      )
  },
  {
    path: "/grama/send-reports",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/send_reports"
      )
  },
  {
    path: "/grama/aprove-agents",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/aprove_ajents"
      )
  },

  ////
  {
    path: "/grama/gramaniladai-division-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/grama_niladari_ division"
      )
  },
  {
    path: "/grama/gramaniladai-officer",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama niladari division/grama_niladari_officer_form"
      )
  },

  //end of routes
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home")
  },
  {
    path: adminRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/app"),
    redirect: `${adminRoot}/dashboards`,
    meta: { loginRequired: true },
    /*
    define with Authorization :
    meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] },
    */
    children: [
      {
        path: "dashboards",
        component: () =>
          import(/* webpackChunkName: "dashboards" */ "./views/app/dashboards"),
        redirect: `${adminRoot}/dashboards/default`,
        // meta: { roles: [UserRole.Admin, UserRole.Editor] },
        children: [
          {
            path: "default",
            component: () =>
              import(
                /* webpackChunkName: "dashboards" */ "./views/app/dashboards/Default"
              )
            // meta: { roles: [UserRole.Admin] },
          },
          {
            path: "analytics",

            component: () =>
              import(
                /* webpackChunkName: "dashboards" */ "./views/app/dashboards/Analytics"
              )
            // meta: { roles: [UserRole.Admin] },
          },
          {
            path: "ecommerce",
            component: () =>
              import(
                /* webpackChunkName: "dashboards" */ "./views/app/dashboards/Ecommerce"
              )
            // meta: { roles: [UserRole.Editor] },
          },
          {
            path: "content",
            component: () =>
              import(
                /* webpackChunkName: "dashboards" */ "./views/app/dashboards/Content"
              )
            // meta: { roles: [UserRole.Editor] },
          }
        ]
      },
      {
        path: "pages",
        component: () =>
          import(/* webpackChunkName: "pages" */ "./views/app/pages"),
        redirect: `${adminRoot}/pages/product`,
        children: [
          {
            path: "product",
            component: () =>
              import(
                /* webpackChunkName : "product" */ "./views/app/pages/product"
              ),
            redirect: `${adminRoot}/pages/product/data-list`,
            children: [
              {
                path: "data-list",
                component: () =>
                  import(
                    /* webpackChunkName: "product" */ "./views/app/pages/product/DataList"
                  )
              },
              {
                path: "thumb-list",
                component: () =>
                  import(
                    /* webpackChunkName: "product" */ "./views/app/pages/product/ThumbList"
                  )
              },
              {
                path: "image-list",
                component: () =>
                  import(
                    /* webpackChunkName: "product" */ "./views/app/pages/product/ImageList"
                  )
              },
              {
                path: "details",
                component: () =>
                  import(
                    /* webpackChunkName: "product" */ "./views/app/pages/product/Details"
                  )
              },
              {
                path: "details-alt",
                component: () =>
                  import(
                    /* webpackChunkName: "product" */ "./views/app/pages/product/DetailsAlt"
                  )
              }
            ]
          },
          {
            path: "profile",
            component: () =>
              import(
                /* webpackChunkName : "profile" */ "./views/app/pages/profile"
              ),
            redirect: `${adminRoot}/pages/profile/social`,
            children: [
              {
                path: "social",
                component: () =>
                  import(
                    /* webpackChunkName: "profile" */ "./views/app/pages/profile/Social"
                  )
              },
              {
                path: "portfolio",
                component: () =>
                  import(
                    /* webpackChunkName: "profile" */ "./views/app/pages/profile/Portfolio"
                  )
              }
            ]
          },
          {
            path: "blog",
            component: () =>
              import(/* webpackChunkName : "blog" */ "./views/app/pages/blog"),
            redirect: `${adminRoot}/pages/blog/blog-list`,
            children: [
              {
                path: "blog-list",
                component: () =>
                  import(
                    /* webpackChunkName: "blog" */ "./views/app/pages/blog/BlogList"
                  )
              },
              {
                path: "blog-detail",
                component: () =>
                  import(
                    /* webpackChunkName: "blog" */ "./views/app/pages/blog/BlogDetail"
                  )
              }
            ]
          },
          {
            path: "miscellaneous",
            component: () =>
              import(
                /* webpackChunkName : "miscellaneous" */ "./views/app/pages/miscellaneous"
              ),
            redirect: `${adminRoot}/pages/miscellaneous/faq`,
            children: [
              {
                path: "faq",
                component: () =>
                  import(
                    /* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Faq"
                  )
              },
              {
                path: "knowledge-base",
                component: () =>
                  import(
                    /* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/KnowledgeBase"
                  )
              },
              {
                path: "search",
                component: () =>
                  import(
                    /* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Search"
                  )
              },
              {
                path: "prices",
                component: () =>
                  import(
                    /* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Prices"
                  )
              },
              {
                path: "mailing",
                component: () =>
                  import(
                    /* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Mailing"
                  )
              },
              {
                path: "invoice",
                component: () =>
                  import(
                    /* webpackChunkName: "miscellaneous" */ "./views/app/pages/miscellaneous/Invoice"
                  )
              }
            ]
          }
        ]
      },
      {
        path: "applications",
        component: () =>
          import(
            /* webpackChunkName: "applications" */ "./views/app/applications"
          ),
        redirect: `${adminRoot}/applications/todo`,
        children: [
          {
            path: "todo",
            component: () =>
              import(
                /* webpackChunkName: "applications" */ "./views/app/applications/Todo"
              )
          },
          {
            path: "survey",
            component: () =>
              import(
                /* webpackChunkName: "applications" */ "./views/app/applications/Survey"
              )
          },
          {
            path: "survey/:id",
            component: () =>
              import(
                /* webpackChunkName: "applications" */ "./views/app/applications/SurveyDetail"
              ),
            props: true
          },
          {
            path: "chat",
            component: () =>
              import(
                /* webpackChunkName: "applications" */ "./views/app/applications/Chat"
              )
          }
        ]
      },
      {
        path: "ui",
        component: () => import(/* webpackChunkName: "ui" */ "./views/app/ui"),
        redirect: `${adminRoot}/ui/forms`,
        children: [
          {
            path: "forms",
            component: () =>
              import(/* webpackChunkName : "forms" */ "./views/app/ui/forms"),
            redirect: `${adminRoot}/ui/forms/layouts`,
            children: [
              {
                path: "layouts",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "./views/app/ui/forms/Layouts"
                  )
              },
              {
                path: "components",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "./views/app/ui/forms/Components"
                  )
              },
              {
                path: "validations",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "./views/app/ui/forms/Validations"
                  )
              },
              {
                path: "wizard",
                component: () =>
                  import(
                    /* webpackChunkName: "forms" */ "./views/app/ui/forms/Wizard"
                  )
              }
            ]
          },
          {
            path: "datatables",
            component: () =>
              import(
                /* webpackChunkName : "datatables" */ "./views/app/ui/datatables"
              ),
            redirect: `${adminRoot}/ui/datatables/divided-table`,
            children: [
              {
                path: "divided-table",
                component: () =>
                  import(
                    /* webpackChunkName: "datatables" */ "./views/app/ui/datatables/DividedTable"
                  )
              },
              {
                path: "scrollable",
                component: () =>
                  import(
                    /* webpackChunkName: "datatables" */ "./views/app/ui/datatables/Scrollable"
                  )
              },
              {
                path: "default",
                component: () =>
                  import(
                    /* webpackChunkName: "datatables" */ "./views/app/ui/datatables/Default"
                  )
              }
            ]
          },
          {
            path: "components",
            component: () =>
              import(
                /* webpackChunkName : "components" */ "./views/app/ui/components"
              ),
            redirect: `${adminRoot}/ui/components/alerts`,
            children: [
              {
                path: "alerts",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Alerts"
                  )
              },
              {
                path: "badges",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Badges"
                  )
              },
              {
                path: "buttons",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Buttons"
                  )
              },
              {
                path: "cards",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Cards"
                  )
              },
              {
                path: "carousel",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Carousel"
                  )
              },
              {
                path: "charts",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Charts"
                  )
              },
              {
                path: "collapse",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Collapse"
                  )
              },
              {
                path: "dropdowns",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Dropdowns"
                  )
              },
              {
                path: "editors",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Editors"
                  )
              },
              {
                path: "icons",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Icons"
                  )
              },
              {
                path: "input-groups",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/InputGroups"
                  )
              },
              {
                path: "jumbotron",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Jumbotron"
                  )
              },
              {
                path: "maps",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Maps"
                  )
              },
              {
                path: "modal",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Modal"
                  )
              },
              {
                path: "navigation",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Navigation"
                  )
              },
              {
                path: "popover-tooltip",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/PopoverTooltip"
                  )
              },
              {
                path: "sortable",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Sortable"
                  )
              },
              {
                path: "tables",
                component: () =>
                  import(
                    /* webpackChunkName: "components" */ "./views/app/ui/components/Tables"
                  )
              }
            ]
          }
        ]
      },
      {
        path: "menu",
        component: () =>
          import(/* webpackChunkName: "menu" */ "./views/app/menu"),
        redirect: `${adminRoot}/menu/types`,
        children: [
          {
            path: "types",
            component: () =>
              import(
                /* webpackChunkName : "menu-types" */ "./views/app/menu/Types"
              )
          },
          {
            path: "levels",
            component: () =>
              import(
                /* webpackChunkName : "menu-levels" */ "./views/app/menu/levels"
              ),
            redirect: `${adminRoot}/menu/levels/third-level-1`,
            children: [
              {
                path: "third-level-1",
                component: () =>
                  import(
                    /* webpackChunkName: "menu-levels" */ "./views/app/menu/levels/Third-level-1"
                  )
              },
              {
                path: "third-level-2",
                component: () =>
                  import(
                    /* webpackChunkName: "menu-levels" */ "./views/app/menu/levels/Third-level-2"
                  )
              },
              {
                path: "third-level-3",
                component: () =>
                  import(
                    /* webpackChunkName: "menu-levels" */ "./views/app/menu/levels/Third-level-3"
                  )
              }
            ]
          }
        ]
      },
      {
        path: "blank-page",
        component: () =>
          import(/* webpackChunkName: "blank-page" */ "./views/app/blank-page")
      }
    ]
  },
  {
    path: "/error",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  },
  {
    path: "/unauthorized",
    component: () =>
      import(/* webpackChunkName: "error" */ "./views/Unauthorized")
  },
  {
    name: "login",
    path: "/user",
    component: () => import(/* webpackChunkName: "user" */ "./views/user"),
    redirect: "/user/login",
    children: [
      {
        path: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Login")
      },
      {
        path: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/Register")
      },
      {
        path: "forgot-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ForgotPassword")
      },
      {
        path: "reset-password",
        component: () =>
          import(/* webpackChunkName: "user" */ "./views/user/ResetPassword")
      }
    ]
  },
  {
    path: "*",
    component: () => import(/* webpackChunkName: "error" */ "./views/Error")
  }
];

const router = new VueRouter({
  linkActiveClass: "active",
  routes,
  mode: "history"
});
router.beforeEach(AuthGuard);
export default router;
