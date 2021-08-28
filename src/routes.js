import { BASE_ROUTE } from "./const/config";
import Login from "./views/Login/Login";
import Dashboard from "./views/Dashboard/Dashboard";
import NewOrder from "./views/NewOrder/NewOrder";
import Orders from "./views/Orders/Orders";
import Customers from "./views/Customers/Customers";
import Items from "./views/Items/Items";
import Suppliers from "./views/Suppliers/Suppliers";

const routes = [
  {
    path: "/",
    render: Dashboard,
    layout: BASE_ROUTE,
  },
  {
    path: "login",
    render: Login,
    layout: BASE_ROUTE,
  },
  {
    path: "new-order",
    render: NewOrder,
    layout: BASE_ROUTE,
  },
  {
    path: "orders",
    render: Orders,
    layout: BASE_ROUTE,
  },
  {
    path: "customers",
    render: Customers,
    layout: BASE_ROUTE,
  },
  {
    path: "items",
    render: Items,
    layout: BASE_ROUTE,
  },
  {
    path: "suppliers",
    render: Suppliers,
    layout: BASE_ROUTE,
  },
];

export default routes;
