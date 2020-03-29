import React from 'react';
import {Container, Col, Row, Nav, NavDropdown, Image, InputGroup, Form, Button} from 'react-bootstrap';
import {Person, Search} from 'react-bootstrap-icons';
import {Link} from 'react-router-dom';

class Navigation extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      authenticated: false,
      submit:false,
      data: {}
    };
  }

  searchChangeHandler(event){
    this.setState({data: event});
  }

  searchSubmitHandler(event){
    this.setState({submit: true});
    this.setState({data: event});

  }
  render(){
    return(
      <Container>
        <Row>
          <Col xs={2}>
            <Link to="/">
              <Image
                src={require("../../assets/img/acm-logo.png")}
                className="banner-logo"
                alt="ACM logo"
              />
            </Link>
          </Col>
          <Col>
          </Col>
          <Col xs={4}>
            <Form onSubmit={(e) => this.searchSubmitHandler(e.target.value)}>
              <Form.Group>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Search By Name"
                    onChange={(e) => this.searchChangeHandler(e.target.value)}
                  />
                  <InputGroup.Append>
                    <Button variant="outline-secondary" type="submit" href={`/shop/search/${this.state.data}`} ><Search /></Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
            </Form>
            <Person />
          </Col>
        </Row>
        <Row>
        <Col xs={1}></Col>
        <Col>
          {this.state.authenticated? (
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
            <NavDropdown title="Profile" id="nav-dropdown">
              <NavDropdown.Item href="/account">Account</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
            ):(
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
            </Nav>
            )}
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default Navigation;
