import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Home from '../pages/Home';
import ProductDetailed from '../pages/ProductDetailed';

export const AppRouter = () => {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={Home}/> 
          <Route exact path="/product-detail" component={ProductDetailed}/>
        </Switch>
    </Router>
  )
}