import { adminRoot } from "./config";
import { UserRole } from "../utils/auth.roles";

const data = [
  {
    icon: "simple-icon-pie-chart",
    label: "menu.analytics",
    to: `${adminRoot}/dashboards/analytics`
    // roles: [UserRole.Admin],
  },
  {
    id: "elder",
    icon: "iconsminds-tumblr",
    label: "menu.elderlang",
    to: `/elderlayout/elder`
  },

  {
    id: "agent-form",
    icon: "simple-icon-user-following",
    label: "menu.agentform",
    to: `/elder`,
    subs: [
      {
        id: "agent-form",
        icon: "simple-icon-user-following",
        label: "menu.agentform",
        to: `/elder/agent-form`
      },
      {
        id: "elder-form",
        icon: "iconsminds-male-female",
        label: "menu.elderform",
        to: `/elder/elder-form`
      },
      {
        id: "elder-list",
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
    to: `/post/post-office`,
    subs: [
      {
        id: "post-office",
        icon: "iconsminds-post-mail-2",
        label: "menu.postoffice",
        to: `/post/post-office`
      },
      {
        id: "post-office-officer",
        icon: "iconsminds-add-user",
        label: "menu.postoffice-officer",
        to: `/post/post-office-officer`
      }
    ]
  },

  {
    id: "divisional-office-form",
    icon: "iconsminds-the-white-house",
    label: "menu.divisional-office-form",
    to: `/division/`,
    subs: [
      {
        id: "divisional-office-form",
        icon: "iconsminds-the-white-house",
        label: "menu.divisional-office-form",
        to: `/division/divisional-office-form`
      },
      {
        id: "divisional-office-officer",
        icon: "iconsminds-add-user",
        label: "menu.divisional-office-officer",
        to: `/division/divisional-office-officer`
      }
    ]
  },

  {
    id: "gramaniladai-division-form",
    icon: "iconsminds-city-hall",
    label: "menu.gramaniladai-division-form",
    to: `/grama/`,
    subs: [
      {
        id: "gramaniladai-division-form",
        icon: "iconsminds-city-hall",
        label: "menu.gramaniladai-division-form",
        to: `/grama/gramaniladai-division-form`
      },
      {
        id: "gramaniladai-officer",
        icon: "iconsminds-add-user",
        label: "menu.gramaniladai-officer",
        to: `/grama/gramaniladai-officer`
      }
    ]
  }
];
export default data;
