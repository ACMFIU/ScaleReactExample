import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
class AboutUs extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col>
            <p> this is about</p>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default AboutUs;
