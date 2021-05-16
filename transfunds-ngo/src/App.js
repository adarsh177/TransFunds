import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SplashScreen from "./screens/SplashScreen/SplashScreen";
import Dashboard from "./screens/Dashboard/Dashboard";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <SplashScreen />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
