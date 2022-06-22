import { Route, Switch } from "react-router-dom";
import { Cadastro } from "../pages/Cadastro";
import { Login } from "../pages/Login";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/login"}>
        <Login />
      </Route>
      <Route  path={"/cadastro"}>
        <Cadastro />
      </Route>
    </Switch>
  );
};
