import { adminRoot, elderRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    id: "dashboards",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `${elderRoot}/dashboards/`,
    roles: [UserRole.Admin, UserRole.Elders, UserRole.Editor]
  },

  {
    id: "elder",
    icon: "iconsminds-tumblr",
    label: "menu.elderlang",
    to: `/elderlayout/elder`,
    roles: [UserRole.Editor]
  },

  {
    id: "agent-form",
    icon: "simple-icon-user-following",
    label: "menu.agentform",
    to: `/elder`,
    //roles: [UserRole.Editor],
    subs: [
      {
        icon: "simple-icon-user-following",
        label: "menu.elder-dashboard",
        to: `/elder/elder-dashboard`
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.elder-pament-details",
        to: `/elder/elder-pament-details`
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.reason-about-payments",
        to: `/elder/reason-about-payments`
      },
      {
        icon: "simple-icon-user-following",
        label: "menu.agentform",
        to: `/elder/agent-form`
      },
      {
        icon: "iconsminds-male-female",
        label: "menu.elderform",
        to: `/elder/elder-form`
      },
      {
        icon: "iconsminds-network",
        label: "menu.elderlist",
        to: `/elder/elder-list`
      }
    ]
  },

  {
    id: "post-office",
    icon: "iconsminds-post-mail-2",
    label: "menu.postoffice",
    to: `/post/`,
    roles: [UserRole.Editor],
    subs: [
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.post-officer-dashboard",
        to: `/post/post-officer-dashboard`
      },
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.lsit-of-elder-pyament",
        to: `/post/lsit-of-elder-pyament`
      },
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.get-elder-detail-verification",
        to: `/post/get-elder-detail-verification`
      },
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.elders-related-to-post-off",
        to: `/post/elders-related-to-post-off`
      },
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.assign-post-officers",
        to: `/post/assign-post-officers`
      },
      {
        icon: "iconsminds-post-mail-2",
        label: "menu.send-reports",
        to: `/post/send-reports`
      },

      ////

      {
        icon: "iconsminds-post-mail-2",
        label: "menu.postoffice",
        to: `/post/post-office`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.postoffice-officer",
        to: `/post/officer-post`
      }
    ]
  },

  {
    id: "divisional-office-form",
    icon: "iconsminds-the-white-house",
    label: "menu.divisional-office-form",
    to: `/division/`,
    roles: [UserRole.Editor],
    subs: [
      {
        icon: "iconsminds-the-white-house",
        label: "menu.divisional-secretary-officer-dashboard",
        to: `/division/divisional-secretary-officer-dashboard`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.divisional-office-form",
        to: `/division/divisional-office-form`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.divisional-office-officer",
        to: `/division/divisional-office-officer`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.district-office",
        to: `/division/district-office-form`
      },
      ///
      {
        icon: "iconsminds-the-white-house",
        label: "menu.advance-serch-elders",
        to: `/division/advance-serch-elders`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.assign-grama-niladari",
        to: `/division/assign-grama-niladari`
      },

      {
        icon: "iconsminds-the-white-house",
        label: "menu.evaluate-elder-application",
        to: `/division/evaluate-elder-application`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.get-reports",
        to: `/division/get-reports`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.list-of-elders",
        to: `/division/list-of-elders`
      },
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
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.view-priority-list",
        to: `/division/view-priority-list`
      },
      {
        icon: "iconsminds-the-white-house",
        label: "menu.view-benifisher-list",
        to: `/division/view-benifisher-list`
      }
    ]
  },

  {
    id: "gramaniladai-division-forma",
    icon: "iconsminds-city-hall",
    label: "menu.gramaniladai-division-form",
    to: `/grama/`,
    roles: [UserRole.Editor],
    subs: [
      {
        icon: "iconsminds-add-user",
        label: "menu.gramaniladari-dashboard",
        to: `/grama/gramaniladari-dashboard`
      },
      {
        icon: "iconsminds-city-hall",
        label: "menu.gramaniladai-division-form",
        to: `/grama/gramaniladai-division-form`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.gramaniladai-officer",
        to: `/grama/gramaniladai-officer`
      },
      ///

      {
        icon: "iconsminds-add-user",
        label: "menu.inform-death-of-elder",
        to: `/grama/inform-death-of-elder`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.list-of-applicans",
        to: `/grama/list-of-applicans`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.list-of-benifishers",
        to: `/grama/list-of-benifishers`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.send-complains",
        to: `/grama/send-complains`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.view-elder-application-verify",
        to: `/grama/view-elder-application-verify/2`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.view-elder-details",
        to: `/grama/view-elder-details`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.send-reports-d",
        to: `/grama/send-reports`
      },
      {
        icon: "iconsminds-add-user",
        label: "menu.aprove-agents",
        to: `/grama/aprove-agents`
      }
    ]
  },
  {
    id: "dashboard",
    icon: "simple-icon-equalizer",
    label: "menu.dashboard",
    to: `/app/dashboards/`,
    roles: [UserRole.Editor]
  }
];
export default data;
