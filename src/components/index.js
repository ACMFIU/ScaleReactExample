import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../assets/css/style.css';
import Landing from './Home/Landing';
import ItemDetail from './ItemDetails/ItemDetail';

export default function Main() {
  return(
      <Router>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/about-us" />
          <Route path="/blog" />
          <Route path="/contact-us" />
          <Route path='/store/books/:bookSKU' component={ItemDetail} />
        </Switch>
      </Router>
  );
}
