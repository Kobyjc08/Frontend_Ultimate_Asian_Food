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
import Desserts from '../pages/Desserts';
import AsianTraditionalFood from '../pages/Asian-Traditional-Food';
import Spices from '../pages/Spices';
import Lentils from '../pages/lentils-rices-flours'

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
          <Route exact path="/categories/Desserts" component={Desserts}/> 
          <Route exact path="/categories/Traditional-Food" component={AsianTraditionalFood}/> 
          <Route exact path="/categories/Spices" component={Spices}/> 
          <Route exact path="/categories/Lentils-Rice-Flour" component={Lentils}/>
          
        </Switch>
    </Router>
  )
}