import React, { Component } from 'react';
import TabBarCom from "./common/tabBar";
import {HashRouter as Router,Switch,Route,Redirect} from "react-router-dom";
import {
  Home,
  Mine,
  News,
  Shopping
} from "./views"
class App extends Component {
  render() {
    return (
      <Router>
        
        <Switch>
          <Redirect from="/" to="/home" exact/>
          <Route path="/home" component={Home}/>
          <Route path="/mine" component={Mine}/>
          <Route path="/news" component={News}/>
          <Route path="/shopping" component={Shopping}/>
        </Switch>
        <TabBarCom/>
      </Router>
    );
  }
}

export default App;
