import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import LayersIcon from "@material-ui/icons/Layers";
import AddIcon from "@material-ui/icons/Add";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>

        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link to="/new-order">
      <ListItem button>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="New order" />
      </ListItem>
    </Link>
    <Link to="/orders">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Orders" />
      </ListItem>
    </Link>
    <Link to="/customers">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Customers" />
      </ListItem>
    </Link>
    <Link to="/items">
      <ListItem button>
        <ListItemIcon>
          <ShowChartIcon />
        </ListItemIcon>
        <ListItemText primary="Items" />
      </ListItem>
    </Link>
    <Link to="/suppliers">
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Suppliers" />
      </ListItem>
    </Link>
  </div>
);
