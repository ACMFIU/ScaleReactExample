import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: props
    };
  }

  render(){
    console.log(this.state.data);
    return(
      <Container>
        <Row>
          <Col xs={1}></Col>
          <Col>
            <Row>
              <Col>
                image
              </Col>
              <Col>
                <div>
                  <h1>title</h1>
                  <label>Price $19.00</label>
                </div>
              </Col>
            </Row>
          </Col>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default ItemDetail;
