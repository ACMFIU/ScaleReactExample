import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      fname: "John",
      lname: "Smith",
      address: {
        street: "123 main st",
        city: "Miami",
        state: "FL",
        zip: "33199",
      },
      credit: {
        name: "John Smith",
        cnumber: "342342353242342"
      },
      comments:[],
      history:[]
    }

  }

  componentDidMount(){
    //connect to DB to collect information
  }
  render(){
    return(
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col>
            <label>Name</label> {this.state.fname} {' '} {this.state.lname}
            <label>Address</label>

          </Col>
          <Col>
          </Col>
          <Col xs={1}></Col>
        <Row>
      </Container>
    );
  }
}
