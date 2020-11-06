import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Premium from "./pages/Premium";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/premium" exact component={Premium} />
      </Switch>
    </Router>
  );
}

export default Routes;
