import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/pages/home';
import Carlist from './components/pages/carlist';
import history from "./components/pages/history";
import EditCarDetails from "./components/pages/EditCarDetails";
import AddNewCar from "./components/pages/addnewcar";
function App() {
  return (
    <Router> 
        <Switch history={history}>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/carlist" component={Carlist} /> 
          <Route exact path="/edit/car/:id" render={(props)=><EditCarDetails {...props}/>} /> 
          <Route exact path="/AddNewCar" component={AddNewCar} />
        </Switch> 
    </Router>
    
  );
}

export default App;
