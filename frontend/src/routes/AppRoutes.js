import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetailed from '../pages/ProductDetailed';
import About from '../pages/About';
import FAQ from '../pages/FAQ';
import Contact from '../pages/Contact';
import Register from '../pages/Register';
import Login from '../pages/Login';

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/product-detail" component={ProductDetailed}/>
          <Route exact path="/About" component={About}/> 
          <Route exact path="/FAQ" component={FAQ}/> 
          <Route exact path="/Contact" component={Contact}/> 
          <Route exact path="/Register" component={Register}/> 
          <Route exact path="/Login" component={Login}/> 
        </Switch>
    </Router>
  )
}