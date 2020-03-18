import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../assets/css/style.css';
import Landing from './Home/Landing';
import ItemDetail from './ItemDetails/ItemDetail';
import Navigation from './Navigation/StoreNavBar';

export default function Main() {
  return(
      <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path="/about-us" />
            <Route path="/blog" />
            <Route path="/contact-us" />
            <Route path='/store/books/' exact/>
            <Route path='/store/books/:bookSKU' component={ItemDetail} />
            <Route path='/store/shirts/:shirtSKU' component={ItemDetail} />
          </Switch>
      </Router>
  );
}
