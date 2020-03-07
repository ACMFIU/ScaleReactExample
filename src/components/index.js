import React from 'react';
import '../assets/css/style.css';
import Navigation from './Navigation/StoreNavBar';
import Landing from './Home/Landing';

class Main extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Navigation />
        <Landing />
      </React.Fragment>
    );
  }
}

export default Main;
