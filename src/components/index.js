import React from 'react';
import '../assets/css/style.css';
import Navigation from './Navigation/StoreNavBar';

class Main extends React.Component {
  render(){
    return(
      <React.Fragment>
        <Navigation />
      </React.Fragment>
    );
  }
}

export default Main;
