import React from 'react';
import {Container, Col, Row, Nav, NavDropdown, Button, Image} from 'react-bootstrap';

class Navigation extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Image src={require("../../assets/img/acm-logo.png")} className="banner-logo" alt="ACM logo" />
          </Col>
          <Col xs={2}></Col>
        </Row>
        <Row>
        <Col xs={1}></Col>
        <Col>
          <Nav fill variant="tabs" defaultActiveKey="/home">
            <NavDropdown title="Shop" id="nav-dropdown">
              <NavDropdown.Item href="/shop/books">Books</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/shop/shirts">Shirts</NavDropdown.Item>
              <NavDropdown.Item href="/shop/hoodies">Hoodies</NavDropdown.Item>
              <NavDropdown.Item href="/shop/shorts">Shorts</NavDropdown.Item>
              <NavDropdown.Item href="/shop/socks">Socks</NavDropdown.Item>
              <NavDropdown.Item href="/shop/hats">Hats</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/shop/chargers">Chargers</NavDropdown.Item>
              <NavDropdown.Item href="/shop/usb">USB</NavDropdown.Item>
              <NavDropdown.Item href="/shop/hydro-flasks">Hydro Flask</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item>
              <Nav.Link href="/about-us">About Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contact-us">Contact Us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/search">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav.Item>
          </Nav>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
