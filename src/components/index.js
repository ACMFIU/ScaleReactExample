import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import '../assets/css/style.css';
import Landing from './Home/Landing';
import StoreBooks from './Home/StoreBooks';
import ItemDetail from './ItemDetails/ItemDetail';
import Navigation from './Navigation/StoreNavBar';
import AboutUs from './AboutUs/AboutUs';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

const graphqlClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});
export default function Main() {
  return(
    <ApolloProvider client={graphqlClient}>
      <Router>
          <Navigation />
          <Switch>
            <Route path='/' exact component={Landing} />
            <Route path="/about-us" exact component={AboutUs}/>
            <Route path="/blog" exact />
            <Route path="/contact-us" exact />
            <Route path='/shop/books' exact component={StoreBooks}/>
            <Route path='/shop/books/:bookSKU' component={ItemDetail} />
            <Route path='/shop/shirts/:shirtSKU' component={ItemDetail} />
          </Switch>
      </Router>
    </ApolloProvider>
  );
}
