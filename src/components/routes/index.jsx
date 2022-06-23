import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import { Cadastro } from "../pages/Cadastro";
import { Dashboard } from "../pages/Dashboard";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const Routes = () => {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@Kenziehub:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  return (
    <Switch>
      <Route exact path={"/"}>
        <Home authenticated={authenticated} />
      </Route>
      <Route path={"/login"}>
        <Login
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
      <Route path={"/cadastro"}>
        <Cadastro authenticated={authenticated} />
      </Route>
      <Route path={"/dashboard"}>
        <Dashboard
          authenticated={authenticated}
          setAuthenticated={setAuthenticated}
        />
      </Route>
    </Switch>
  );
};
