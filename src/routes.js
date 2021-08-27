import { BASE_ROUTE } from "./const/config";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";

const routes = [
  {
    path: "/login",
    render: Login,
    layout: BASE_ROUTE,
  },
  {
    path: "/",
    render: Dashboard,
    layout: BASE_ROUTE,
  },
];

export default routes;
