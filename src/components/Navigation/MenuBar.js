import React from 'react';
import {Container, Nav, Navbar, NavDropdown, Form, Button, FormControl} from 'react-bootstrap';

class MenuBar extends React.Component {
  constructor(props){
    super(props);

    this.btnHandler = this.btnHandler.bind(this);
  }

  btnHandler(event){
    event.preventDefault();
    console.log(event);
  }
  render(){
    //math
    return(
      <Container>
        <div className="menu">
          <ul>
            <a href="/">home</a>
            <a href="/about">about</a>
          </ul>

        </div>

      </Container>
    );
  }
}

export default MenuBar;
