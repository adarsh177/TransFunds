import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import SplashScreen from "./screens/SplashScreen";

class App extends React.Component{
  render(){
    return(
      <Router>
         <Switch>
           <Route path="/" exact> <SplashScreen/> </Route>
         </Switch>
       </Router>
    );
  }
}

export default App;
