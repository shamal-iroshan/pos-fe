import React from "react";
import routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, key) => (
          <Route
            exact={true}
            path={route.layout + route.path}
            component={route.render}
            key={key}
          />
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
