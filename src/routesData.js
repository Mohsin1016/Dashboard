import { Customers, Page404,  Login,  } from "./views";
import { GerenalLayout, DashboardLayout } from "./layouts";
export const routes = [
  {
    exact: true,
    path: "/",
    layout: GerenalLayout,
    component: Login,
  },
  {
    exact: true,
    path: "/user/dashboard/customers",
    layout: DashboardLayout,
    component: Customers,
  },
  {
    path: "*",
    component: Page404,
  },
];
