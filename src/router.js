import Vue from "vue";
import VueRouter from "vue-router";
import AuthGuard from "./utils/auth.guard";
import {
  adminRoot,
  elderRoot,
  sysAdminRoot,
  dofficerRoot,
  divisionalOffHeadRoot
} from "./constants/config";

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
        path: "/elder/update-form",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/update_elder.vue"
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
        path: "/elder/agent-details",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/agent_details"
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
        path: "/elder/reason-about-payments/:pay_id",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/submit_reason_about_payments"
          ),
        props: true
      },
      {
        path: "/elder/elder-list",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/elderlis"
          )
      },
      {
        path: "/elder/map",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "./views/elde-allowance-view/user/map.vue"
          )
      }
    ]
  },

  ////////////System Admin//////////////////////
  {
    path: sysAdminRoot,
    component: () =>
      import(
        /* webpackChunkName: "app" */ "./views/sysadmin/dashboards/Default"
      ),
    redirect: `${sysAdminRoot}/dashboards/Default`,
    meta: {
      loginRequired: true,
      roles: [UserRole.SystemAdmin, UserRole.Editor]
    },
    children: [
      {
        path: "dashboards",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/sysadmin/dashboards/Default"
          )
      }
    ]
  },
  {
    path: "/sysadmin/gramaniladai-division-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/grama_niladari_ division"
      )
  },
  {
    path: "/sysadmin/gramaniladai-officer",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/grama_niladari_officer_form"
      )
  },
  {
    path: "/sysadmin/list-of-grama-divisions",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_grama_divisions"
      )
  },
  {
    path: "/sysadmin/list-of-gramaniladari",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_gramaniladari"
      )
  },
  {
    path: "/sysadmin/list-of-postofficers",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_post_officers.vue"
      )
  },
  {
    path: "/sysadmin/list-of-post-office",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_post_office"
      )
  },
  {
    path: "/sysadmin/list-divisional-secretry",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_divisional_secretry"
      )
  },
  {
    path: "/sysadmin/post-office",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/postoffice_form"
      )
  },
  {
    path: "/sysadmin/officer-post",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/postoffice_officer_form"
      )
  },
  {
    path: "/sysadmin/district-office-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/district_office_form"
      )
  },
  {
    path: "/sysadmin/divisional-office-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/divisional_office_form"
      )
  },

  {
    path: "/sysadmin/divisional-office-officer",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/divisional_office_officer_form"
      )
  },

  {
    path: "/sysadmin/criteria",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/criteria"
      )
  },

  /////////////////End System Admin////////////////////
  ////////////////////////////////////////////////////////////////////////
  //Divisional Officer
  ////////////////////////////////////////////////////////////////////////
  {
    path: dofficerRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/dofficer"),
    redirect: `${dofficerRoot}/dashboard`,
    meta: {
      loginRequired: true,
      roles: [UserRole.Admin, UserRole.DivisionalOfficers]
    },
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/dofficer/dashboard/"
          )
      },
      {
        path: "pendingapplications",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/dofficer/pendingapplications"
          )
      },
      {
        path: "selectedapplications",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/dofficer/selectedapplications"
          )
      }
    ]
  },
    /////////////////End System Admin////////////////////


  ////////////////////////////////////////////////////////////////////////
  //Divisional Headz
  ////////////////////////////////////////////////////////////////////////
  {
    path: divisionalOffHeadRoot,
    component: () => import(/* webpackChunkName: "app" */ "./views/divisionaloffhead"),
    redirect: `${divisionalOffHeadRoot}/dashboard`,
    meta: {
      loginRequired: true,
      roles: [UserRole.Admin, UserRole.DivisionalOffHead]
    },
    children: [
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/divisionaloffhead/dashboard/"
          )
      },
      {
        path: "applicationstoapprove",
        component: () =>
          import(
            /* webpackChunkName: "dashboards" */ "./views/divisionaloffhead/applicationstoapprove"
          )
      }
      
    ]
  },
    /////////////////End System Admin////////////////////




















  ////////////////////////////////////////////////////////////////////////
  //Divisional Officer
  ////////////////////////////////////////////////////////////////////////

  // {
  //   path: "/elderlayout/elder",
  //   component: () =>
  //     import("./views/elde-allowance-view/Layout-check/Elder-layout"),
  //   meta: { loginRequired: true, roles: [UserRole.Admin, UserRole.Editor] }
  // },
  // {
  //   path: "/elderlogin",
  //   component: () => import("./views/elde-allowance-view/user/login")
  // },

  // {
  //   path: "/elder/elder-form",
  //   component: () => import("./views/elde-allowance-view/user/elderfrom")
  // },
  // {
  //   path: "/elder/agent-form",
  //   component: () => import("./views/elde-allowance-view/user/agent_form")
  // },
  // {
  //   path: "/elder/elder-pament-details",
  //   component: () =>
  //     import("./views/elde-allowance-view/user/elder_pament_details")
  // },

  // {
  //   path: "/elder/reason-about-payments",
  //   component: () =>
  //     import("./views/elde-allowance-view/user/submit_reason_about_payments")
  // },

  // {
  //   path: "/elder/elder-list",
  //   component: () => import("./views/elde-allowance-view/user/elderlis")
  // },

  //////////////////////
  // post office

  {
    path: "/post/post-officer-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/post_officer_dashboard"
      )
  },

  {
    path: "/post/lsit-of-elder-pyament",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/lsit_of_elder_pyament"
      )
  },
  {
    path: "/post/get-elder-detail-verification/:id/:pay_id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/get_elder_detail_verification"
      ),
    props: true
  },
  // {
  //   path: "/post/get_details_postoffice/:id",
  //   component: () =>
  //     import(
  //       /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/get_details_postoffice"
  //     ),
  //   props: true
  // },
  {
    path: "/post/list_of_histrory_elders.vue/:post_off/:year/:month",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/list_of_histrory_elders"
      ),
    props: true
  },
  {
    path: "/post/elders-related-to-post-off",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/elders_related_to_post_off"
      )
  },
  {
    path: "/post/assign-post-officers",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/assign_officers"
      )
  },
  {
    path: "/post/send-reports",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/send_reports"
      )
  },
  {
    path: "/post/complain",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/send_complain"
      )
  },
  {
    path: "/post/paynemt-histroy",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/paynemt_histroy"
      )
  },

  ////////////////////////////////////////////////////////////////////////////////
  {
    path: "/admin/post-office",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/postoffice_form"
      )
  },

  {
    path: "/admin/officer-post",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/postoffice_officer_form"
      )
  },

  ////////////////////////////////////////////////////
  // divisional rotes
  {
    path: "/admin/district-office-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/district_office_form"
      )
  },

  {
    path: "/admin/divisional-office-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/divisional_office_form"
      )
  },

  {
    path: "/division/pay_post_office_form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/pay_post_office_form"
      )
  },

  {
    path: "/division/payhistory",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/payment_history"
      )
  },

  {
    path: "/division/div_to_ben",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_pay_to_benifisher"
      )
  },

  {
    path: "/division/div_to_post",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_pay_to_post"
      )
  },

  {
    path: "/admin/divisional-office-officer",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/divisional_office_officer_form"
      )
  },
  ////

  {
    path: "/division/advance-serch-elders",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/advance_serch_elders"
      )
  },
  {
    path: "/division/assign-grama-niladari",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/assign_grama_niladari"
      )
  },
  {
    path: "/division/divisional-secretary-officer-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/divisional_secretary_officer_dashboard"
      )
  },
  {
    path: "/division/list-of-deaths",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_deaths"
      )
  },
  {
    path: "/division/list-of-complains",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_complains"
      )
  },
  {
    path: "/division/list-of-post-complains",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_post_complains"
      )
  },
  {
    path: "/division/evaluate-elder-application",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/evaluate_elder_application"
      )
  },
  {
    path: "/division/get-reports",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/get_reports"
      )
  },
  {
    path: "/division/list-of-elders",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_elders"
      )
  },
  {
    path: "/division/list-of-grama-divisions",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_grama_divisions"
      )
  },
  {
    path: "/division/list-of-gramaniladari",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_gramaniladari"
      )
  },
  {
    path: "/division/list-of-post-office",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_post_office"
      )
  },
  {
    path: "/division/get_details_postoffice/:id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/get_details_postoffice"
      ),
    props: true
  },
   {
    path: "/division/get_details_divisional_secretry/:id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/view_divisional_secretory.vue"
      ),
    props: true
  },
  {
    path: "/division/view-priority-list",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/view_priority_list"
      )
  },
  {
    path: "/division/view-benifisher-list",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/view_benifisher_list"
      )
  },
  {
    path: "/division/view-elder-application-verify/:id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/view_elder_application_verify"
      ),
    props: true
  },
  {
    path: "/division/elder-application-list",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_applicans_to_div.vue"
      ),
    props: true
  },
  {
    path: "/division/all-payment-report",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/all_payment_report"
      )
  },
  {
    path: "/division/get-payment-by-years",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/get_payment_years.vue"
      )
  },
  {
    path: "/division/get-payment-by-months/:year",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/get_payment_month.vue"
      ),
    props: true
  },
  {
    path: "/division/list_of_pay_to_post_year_months/:year/:month",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_of_pay_to_post_year_months.vue"
      ),
    props: true
  },
  {
    path: "/division/list-paybenifisher-by-pay_id/:pay_id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/divisional_secretary/list_paybenifisher_by_post_office.vue"
      ),
    props: true
  },
  //////////////////////////////
  //////////////////////////
  //////////////////////////////////////////////
  //gramadivision routes

  {
    path: "/grama/gramaniladari-dashboard",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/gramaniladari_dashboard"
      )
  },
  {
    path: "/grama/inform-death-of-elder",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/inform_death_of_elder"
      )
  },
  {
    path: "/grama/list-of-applicans",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/list_of_applicans"
      )
  },
  {
    path: "/grama/list-of-benifishers",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/list_of_benifishers"
      )
  },
  {
    path: "/grama/send-complains",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/send_complains"
      )
  },
  {
    path: "/grama/view-elder-application-verify/:id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/view_elder_application_verify"
      ),
    props: true
  },
  {
    path: "/grama/view-elder-details",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/view_elder_details"
      )
  },
  {
    path: "/grama/send-reports",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/send_reports"
      )
  },
  {
    path: "/grama/aprove-agents",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/aprove_ajents"
      )
  },

  ////
  {
    path: "/admin/gramaniladai-division-form",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/grama_niladari_ division"
      )
  },
  {
    path: "/admin/gramaniladai-officer",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/grama_niladari_officer_form"
      )
  },
  {
    path: "/grama/gramaniladai-officer-details/:id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/grama_niladari_division/view_grama_details"
      ),
    props: true
  },
  {
    path: "/post/post-officer-details/:id",
    component: () =>
      import(
        /* webpackChunkName: "home" */ "./views/elde-allowance-view/post_office/view_post_officer_detail.vue"
      ),
    props: true
  },

  //end of routes
  /////////////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  // {
  //   path: "/",
  //   component: () => import(/* webpackChunkName: "home" */ "./views/home")
  // },
  {
    path: "/",
    component: () => import(/* webpackChunkName: "home" */ "./views/home/home")
  },
  // {
  //   path: "/",
  //   component: () => import(/* webpackChunkName: "home" */ "./views/user/Login")
  // },

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
    name: "ChangePass",
    path: "/user/changepass",
    component: () => import(/* webpackChunkName: "user" */ "./views/user/Changepass"),
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
