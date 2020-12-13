import { adminRoot, elderRoot, sysAdminRoot, dofficerRoot } from "./config";

import { UserRole } from "../utils/auth.roles";

const data = [

    ////////////////////////////////////////////////////////
  //Divisinal Officer
  ////////////////////////////////////////////////////////
  {
    id: "dashboard_do",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `${dofficerRoot}/dashboard/`,
    roles: [UserRole.Admin, UserRole.DivisionalOfficers, UserRole.Editor]
  },
  {
    id: "applications",
    icon: "iconsminds-digital-drawing",
    label: "menu.applications",
    roles: [UserRole.DivisionalOfficers],
    subs: [
      {
        id: "pages-authorization",
        label: "menu.pendingapplications",
        to: `${dofficerRoot}/pendingapplications/`
      },
      {
        id: "pages-authorization",
        label: "menu.selectedapplications",
        to: `${dofficerRoot}/selectedapplications`
      }
    ]
  },






















  {
    id: "dashboards",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `${elderRoot}/dashboards`,
    roles: [UserRole.Admin, UserRole.Elders, UserRole.Editor]
  },

  {
    id: "elder-pament-details",
    icon: "simple-icon-user-following",
    label: "menu.elder-pament-details",
    to: `/elder/elder-pament-details`,
    roles: [UserRole.Editor, UserRole.Elders]
  },
  // {
  //   id: "reason-about-payments",
  //   icon: "simple-icon-user-following",
  //   label: "menu.reason-about-payments",
  //   to: `/elder/reason-about-payments/114`,
  //   roles: [UserRole.Editor, UserRole.Elders]
  // },
  {
    id: "agent-form",
    icon: "simple-icon-user-following",
    label: "menu.agentform",
    to: "/elder/agent-form",
    roles: [UserRole.Editor, UserRole.Elders]
  },
  {
    id: "agent-details",
    icon: "simple-icon-user-following",
    label: "menu.agentdetails",
    to: "/elder/agent-details",
    roles: [UserRole.Editor, UserRole.Elders]
  },
  {
    id: "elder-form",
    icon: "iconsminds-male-female",
    label: "menu.elderform",
    to: `/elder/elder-form`,
    roles: [UserRole.Editor, UserRole.Elders]
  },
    {
    id: "update-form",
    icon: "iconsminds-male-female",
    label: "menu.elderform",
    to: `/elder/update-form`,
    roles: [UserRole.Editor, UserRole.Elders]
  },
  // {
  //   id: "elder-list",
  //   icon: "iconsminds-network",
  //   label: "menu.elderlist",
  //   to: `/elder/elder-list`,
  //   roles: [UserRole.Editor, UserRole.Elders]
  // },
  // {
  //   id: "agent-form",
  //   icon: "simple-icon-user-following",
  //   label: "menu.agentform",
  //   to: `/elder`,
  //   roles: [UserRole.Editor, UserRole.Elders],
  //   subs: [
  //     {
  //       icon: "simple-icon-user-following",
  //       label: "menu.elder-dashboard",
  //       to: `/elder/elder-dashboard`
  //     },
  //     {
  //       icon: "simple-icon-user-following",
  //       label: "menu.elder-pament-details",
  //       to: `/elder/elder-pament-details`
  //     },
  //     {
  //       icon: "simple-icon-user-following",
  //       label: "menu.reason-about-payments",
  //       to: `/elder/reason-about-payments`
  //     },
  //     {
  //       icon: "simple-icon-user-following",
  //       label: "menu.agentform",
  //       to: `/elder/agent-form`
  //     },
  //     {
  //       icon: "iconsminds-male-female",
  //       label: "menu.elderform",
  //       to: `/elder/elder-form`
  //     },
  //     {
  //       icon: "iconsminds-network",
  //       label: "menu.elderlist",
  //       to: `/elder/elder-list`
  //     }
  //   ]
  // },

  






















  //////Admin//////

  //   {
  //g
  //     id: "admin",
  //     icon: "iconsminds-administrator",
  //     label: "menu.admin",
  //     to: `/elderlayout/admin`,
  //     roles: [UserRole.Admin, UserRole.Editor, UserRole.SystemAdmin],
  //     subs: [
  //       {
  //         icon: "iconsminds-post-mail-2",
  //         label: "menu.postoffice",
  //         to: `/admin/post-office`
  //       },
  //       {
  //         icon: "iconsminds-add-user",
  //         label: "menu.postoffice-officer",
  //         to: `/admin/officer-post`
  //       },
  //       {
  //         icon: "iconsminds-the-white-house",
  //         label: "menu.divisional-office-form",
  //         to: `/admin/divisional-office-form`
  //       },
  //       {
  //         icon: "iconsminds-add-user",
  //         label: "menu.divisional-office-officer",
  //         to: `/admin/divisional-office-officer`
  //       },
  //       {
  //         icon: "iconsminds-the-white-house",
  //         label: "menu.district-office",
  //         to: `/admin/district-office-form`
  //       },
  //       {
  //         icon: "iconsminds-city-hall",
  //         label: "menu.gramaniladai-division-form",
  //         to: `/admin/gramaniladai-division-form`
  //       },
  //       {
  //         icon: "iconsminds-add-user",
  //         label: "menu.gramaniladai-officer",
  //         to: `/admin/gramaniladai-officer`
  //       }
  //     ]
  // }
  /////////////System Admin/////////////////////
  {
    id: "admin-dashboard",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `${sysAdminRoot}/dashboards/`,
    roles: [UserRole.SystemAdmin, UserRole.Editor]
  },
  {
    id: "admin-add-officer",
    icon: "iconsminds-add-user",
    label: "menu.add-officer",
    to: `/sysadmin`,
    roles: [UserRole.SystemAdmin, UserRole.Editor],
    subs: [
      {
        icon: "iconsminds-add-user",
        label: "menu.divisional-office-officer",
        to: `/sysadmin/divisional-office-officer`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.postoffice-officer",
        to: `/sysadmin/officer-post`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.gramaniladai-officer",
        to: `/sysadmin/gramaniladai-officer`
      }
    ]
  },
  {
    id: "admin-add-offices",
    icon: "iconsminds-home",
    label: "menu.add-offices",
    to: `/sysadmin`,
    roles: [UserRole.SystemAdmin, UserRole.Editor],
    subs: [
      {
        icon: "iconsminds-the-white-house",
        label: "menu.district-office",
        to: `/sysadmin/district-office-form`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.divisional-office-form",
        to: `/sysadmin/divisional-office-form`
      },
      {
        icon: "iconsminds-city-hall",
        label: "menu.gramaniladai-division-form",
        to: `/sysadmin/gramaniladai-division-form`
      },
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.postoffice",
        to: `/sysadmin/post-office`
      }
    ]
  },
  {
    id: "admin-list",
    icon: "iconsminds-notepad",
    label: "menu.list",
    to: `/sysadmin`,
    roles: [UserRole.Editor, UserRole.SystemAdmin],
    subs: [
      {
        icon: "iconsminds-column",
        label: "menu.list-of-grama-divisions",
        to: `/sysadmin/list-of-grama-divisions`
      },
      {
        icon: "iconsminds-business-man-woman",
        label: "menu.list-of-gramaniladari",
        to: `/sysadmin/list-of-gramaniladari`
      },
      {
        icon: "iconsminds-post-office",
        label: "menu.list-of-post-office",
        to: `/sysadmin/list-of-post-office`
      },
      {
        icon: "iconsminds-post-office",
        label: "menu.list-of-post-office",
        to: `/sysadmin/list-of-postofficers`
      },{
        icon: "iconsminds-post-office",
        label: "menu.list-of-post-office",
        to: `/sysadmin/list-divisional-secretry`
      }
      
    ]
  },
  {
    id: "admin-citiria",
    icon: "simple-icon-compass",
    label: "menu.criteria",
    to: `/sysadmin/criteria/`,
    roles: [UserRole.SystemAdmin, UserRole.Editor]
  },

  ///End System Admin////////////

  // {
  //   id: "elder",
  //   icon: "iconsminds-tumblr",
  //   label: "menu.elderlang",
  //   to: `/elderlayout/elder`,
  //   roles: [UserRole.Editor]
  // },

  // {
  //   id: "post-office",
  //   icon: "iconsminds-post-mail-2",
  //   label: "menu.postoffice",
  //   to: `/post/`,
  //   roles: [UserRole.Editor, UserRole.PostOfficers],
  //   subs: [
  //     {
  //       icon: "iconsminds-post-mail-2",
  //       label: "menu.post-officer-dashboard",
  //       to: `/post/post-officer-dashboard`
  //     },
  //     {
  //       icon: "iconsminds-post-mail-2",
  //       label: "menu.lsit-of-elder-pyament",
  //       to: `/post/lsit-of-elder-pyament`
  //     },
  //     {
  //       icon: "iconsminds-post-mail-2",
  //       label: "menu.get-elder-detail-verification",
  //       to: `/post/get-elder-detail-verification/2`
  //     },
  //     {
  //       icon: "iconsminds-post-mail-2",
  //       label: "menu.elders-related-to-post-off",
  //       to: `/post/elders-related-to-post-off`
  //     },
  //     {
  //       icon: "iconsminds-post-mail-2",
  //       label: "menu.assign-post-officers",
  //       to: `/post/assign-post-officers`
  //     },
  //     {
  //       icon: "iconsminds-post-mail-2",
  //       label: "menu.send-reports",
  //       to: `/post/send-reports`
  //     }

  //     ////
  //   ]
  // },

  {
    id: "post-officer-dashboard",
    icon: "iconsminds-post-mail-2",
    label: "menu.post-officer-dashboard",
    to: `/post/post-officer-dashboard`,
    roles: [UserRole.Editor, UserRole.PostOfficers]
  },
  // {
  //   id: "lsit-of-elder-pyament",
  //   icon: "iconsminds-post-mail-2",
  //   label: "menu.lsit-of-elder-pyament",
  //   to: `/post/lsit-of-elder-pyament`,
  //   roles: [UserRole.Editor, UserRole.PostOfficers]
  // },
  // {
  //   id: "get-elder-detail-verification",
  //   icon: "iconsminds-post-mail-2",
  //   label: "menu.get-elder-detail-verification",
  //   to: `/post/get-elder-detail-verification/13/117`,
  //   roles: [UserRole.Editor, UserRole.PostOfficers]
  // },
  {
    id: "elders-related-to-post-off",
    icon: "iconsminds-post-mail-2",
    label: "menu.elders-related-to-post-off",
    to: `/post/elders-related-to-post-off`,
    roles: [UserRole.Editor, UserRole.PostOfficers]
  },
  {
    id: "paynemt-histroy",
    icon: "iconsminds-post-mail-2",
    label: "menu.elders-related-to-post-off",
    to: `/post/paynemt-histroy`,
    roles: [UserRole.Editor, UserRole.PostOfficers]
  },
  {
    id: "send-complain",
    icon: "simple-icon-dislike",
    label: "menu.complain",
    to: `/post/complain`,
    roles: [UserRole.Editor, UserRole.PostOfficers]
  },

  // {
  //   id: "assign-post-officers",
  //   icon: "iconsminds-post-mail-2",
  //   label: "menu.assign-post-officers",
  //   to: `/post/assign-post-officers`,
  //   roles: [UserRole.Editor, UserRole.PostOfficers]
  // },
  {
    id: "send-reports",
    icon: "iconsminds-monitor-analytics",
    label: "menu.send-reports",
    to: `/post/send-reports`,
    roles: [UserRole.Editor, UserRole.PostOfficers]
  },

  ///////////////////////////////////////////////////////////////
  // {
  //   id: "divisional-office-form",
  //   icon: "iconsminds-the-white-house",
  //   label: "menu.divisional-office-form",
  //   to: `/division/`,
  //   roles: [
  //     UserRole.Editor,
  //     UserRole.DivisionalOffHead,
  //     UserRole.DivisionalOffOfficer,
  //     UserRole.DivisionalOfficers
  //   ],
  //   subs: [
  //     {
  //       icon: "iconsminds-dollar-sign-2",
  //       label: "menu.paymenttopostoffice",
  //       to: `/division/pay_post_office_form`
  //     },
  //     {
  //       icon: "iconsminds-dollar-sign-2",
  //       label: "menu.paytopost",
  //       to: `/division/div_to_post`
  //     },
  //     {
  //       icon: "iconsminds-dollar-sign-2",
  //       label: "menu.paytoben",
  //       to: `/division/div_to_ben`
  //     },
  //     ///
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.advance-serch-elders",
  //       to: `/division/advance-serch-elders`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.assign-grama-niladari",
  //       to: `/division/assign-grama-niladari`
  //     },

  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.evaluate-elder-application",
  //       to: `/division/evaluate-elder-application`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.get-reports",
  //       to: `/division/get-reports`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.list-of-elders",
  //       to: `/division/list-of-elders`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.list-of-grama-divisions",
  //       to: `/division/list-of-grama-divisions`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.list-of-gramaniladari",
  //       to: `/division/list-of-gramaniladari`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.list-of-post-office",
  //       to: `/division/list-of-post-office`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.view-priority-list",
  //       to: `/division/view-priority-list`
  //     },
  //     {
  //       icon: "iconsminds-the-white-house",
  //       label: "menu.view-benifisher-list",
  //       to: `/division/view-benifisher-list`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.view-elder-application-verify",
  //       to: `/division/view-elder-application-verify/2`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.elder-application-list",
  //       to: `/division/elder-application-list`
  //     }
  //   ]
  // },

  ///////////////////////////////////

  {
    id: "divisional-office-form",
    icon: "iconsminds-dollar-sign-2",
    label: "menu.divisional-office-form",
    to: `/division/`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ],
    subs: [
      {
        icon: "iconsminds-dollar-sign-2",
        label: "menu.paymenttopostoffice",
        to: `/division/pay_post_office_form`
      },
      // {
      //   icon: "iconsminds-dollar-sign-2",
      //   label: "menu.paytopost",
      //   to: `/division/div_to_post`
      // },
      // {
      //   icon: "iconsminds-dollar-sign-2",
      //   label: "menu.paytoben",
      //   to: `/division/div_to_ben`
      // },
      {
        icon: "iconsminds-dollar-sign-2",
        label: "menu.payhistory",
        to: `/division/payhistory`
      },
      {
        icon: "iconsminds-dollar-sign-2",
        label: "menu.allpay",
        to: `/division/all-payment-report`
      },
      {
        icon: "iconsminds-dollar-sign-2",
        label: "menu.byyears",
        to: `/division/get-payment-by-years`
      }
    ]
  },

  ///
  {
    id: "advance-serch-elders",
    icon: "iconsminds-the-white-house",
    label: "menu.advance-serch-elders",
    to: `/division/advance-serch-elders`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ]
  },
  // {
  //   icon: "iconsminds-the-white-house",
  //     label: "menu.assign-grama-niladari",
  //       to: `/division/assign-grama-niladari`
  // },

  // {
  //   icon: "iconsminds-the-white-house",
  //     label: "menu.evaluate-elder-application",
  //       to: `/division/evaluate-elder-application`
  // },
  {
    id: "get-reports",
    icon: "iconsminds-monitor-analytics",
    label: "menu.get-reports",
    to: `/division/get-reports`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ]
  },

  {
    id: "grama-divisions",
    icon: "iconsminds-the-white-house",
    label: "menu.divisional-office-form",
    to: `/division/`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ],
    subs: [
      {
        icon: "iconsminds-the-white-house",
        label: "menu.list-of-grama-divisions",
        to: `/division/list-of-grama-divisions`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.list-of-gramaniladari",
        to: `/division/list-of-gramaniladari`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.list-of-post-office",
        to: `/division/list-of-post-office`
      }
    ]
  },

  {
    id: "complains",
    icon: "simple-icon-dislike",
    label: "menu.complain-death",
    to: `/division/`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ],
    subs: [
      {
        icon: "iconsminds-target",
        label: "menu.list-of-complains",
        to: `/division/list-of-complains`
      },
      {
        icon: "iconsminds-target",
        label: "menu.list-of-post-complains",
        to: `/division/list-of-post-complains`
      },
      {
        icon: "iconsminds-target-market",
        label: "menu.list-of-deaths",
        to: `/division/list-of-deaths`
      }
    ]
  },

  {
    id: "list",
    icon: "iconsminds-the-white-house",
    label: "menu.divisional-office-form",
    to: `/division/`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ],
    subs: [
      {
        icon: "iconsminds-the-white-house",
        label: "menu.view-priority-list",
        to: `/division/view-priority-list`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.view-benifisher-list",
        to: `/division/view-benifisher-list`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.elder-application-list",
        to: `/division/elder-application-list`
      },

      {
        icon: "iconsminds-the-white-house",
        label: "menu.list-of-elders",
        to: `/division/list-of-elders`
      }
    ]
  },
  {
    id: "view-elder-application-verify",
    icon: "iconsminds-add-user",
    label: "menu.view-elder-application-verify",
    to: `/division/view-elder-application-verify/2`,
    roles: [
      UserRole.Editor,
      UserRole.DivisionalOffHead,
      UserRole.DivisionalOffOfficer,
      UserRole.DivisionalOfficers
    ]
  },

  // {
  //   id: "gramaniladai-division-forma",
  //   icon: "iconsminds-city-hall",
  //   label: "menu.gramaniladai-division-form",
  //   to: `/grama/`,
  //   roles: [UserRole.Editor, UserRole.GramaNiladariOffices],
  //   subs: [
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.gramaniladari-dashboard",
  //       to: `/grama/gramaniladari-dashboard`
  //     },

  //     ///

  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.inform-death-of-elder",
  //       to: `/grama/inform-death-of-elder`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.list-of-applicans",
  //       to: `/grama/list-of-applicans`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.list-of-benifishers",
  //       to: `/grama/list-of-benifishers`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.send-complains",
  //       to: `/grama/send-complains`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.view-elder-application-verify",
  //       to: `/grama/view-elder-application-verify/2`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.view-elder-details",
  //       to: `/grama/view-elder-details`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.send-reports-d",
  //       to: `/grama/send-reports`
  //     },
  //     {
  //       icon: "iconsminds-add-user",
  //       label: "menu.aprove-agents",
  //       to: `/grama/aprove-agents`
  //     }
  //   ]
  // }

  {
    id: "gramaniladari-dashboard",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `/grama/gramaniladari-dashboard`,
    roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
  },

  ///
  {
    id: "grama-complains",
    icon: "simple-icon-dislike",
    label: "menu.complain-death",
    roles: [UserRole.Editor, UserRole.GramaNiladariOffices],
    subs: [
      {
        icon: "iconsminds-target-market",
        label: "menu.inform-death-of-elder",
        to: `/grama/inform-death-of-elder`
      },
      {
        icon: "iconsminds-target",
        label: "menu.send-complains",
        to: `/grama/send-complains`
      }
    ]
  },

  {
    id: "list-of-applicans",
    icon: "iconsminds-add-user",
    label: "menu.list-of-applicans",
    to: `/grama/list-of-applicans`,
    roles: [UserRole.Editor, UserRole.GramaNiladariOffices],
    subs: [
      {
        id: "list-of-applicans",
        icon: "iconsminds-add-user",
        label: "menu.list-of-applicans",
        to: `/grama/list-of-applicans`,
        roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
      },
      {
        id: "list-of-benifishers",
        icon: "iconsminds-add-user",
        label: "menu.list-of-benifishers",
        to: `/grama/list-of-benifishers`,
        roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
      }
    ]
  },
  // {
  //   id: "view-elder-application-verify",
  //   icon: "iconsminds-add-user",
  //   label: "menu.view-elder-application-verify",
  //   to: `/grama/view-elder-application-verify/2`,
  //   roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
  // },
  // {
  //   id: "view-elder-details",
  //   icon: "iconsminds-add-user",
  //   label: "menu.view-elder-details",
  //   to: `/grama/view-elder-details`,
  //   roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
  // },
  {
    id: "send-reports",
    icon: "iconsminds-monitor-analytics",
    label: "menu.send-reports-d",
    to: `/grama/send-reports`,
    roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
  },
  {
    id: "aprove-agents",
    icon: "iconsminds-add-user",
    label: "menu.aprove-agents",
    to: `/grama/aprove-agents`,
    roles: [UserRole.Editor, UserRole.GramaNiladariOffices]
  },
  ///////////////////////////////////
  // {
  //   id: "dashboard",
  //   icon: "simple-icon-equalizer",
  //   label: "menu.dashboard",
  //   to: `/app/dashboards/`,
  //   roles: [UserRole.Editor]
  // }
  {
    id: "dashboard",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `/app/dashboards/`,
    roles: [UserRole.Editor]
  },


];
export default data;
