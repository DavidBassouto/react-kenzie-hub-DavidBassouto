import { Route, Switch } from "react-router-dom";
import { Home } from "../pages/Home";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path={"/home"}>
        <Home />
      </Route>
    </Switch>
  );
};
