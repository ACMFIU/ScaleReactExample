import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
const data = require('../../models/fake-data');


class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.match.params
    };
    this.getDataFromDB = this.getDataFromDB.bind(this);
  }

  getDataFromDB(){
    if (this.state.data.hasOwnProperty('bookSKU')) {
      var book;
      for(book of data.books){
        if(book.sku === this.state.data.bookSKU){
          this.setState({data: book});
          break;
        }
      }
    } else if (this.state.data.hasOwnProperty('shirtSKU')) {
      var shirt;
      for(shirt of data.shirts){
        if(shirt.sku === this.state.data.shirtSKU){
          this.setState({data: shirt});
          break;
        }
      }
    }
  }
  render(){
    this.getDataFromDB();
    return(
      <Container>
        <Row className="item-detail">
          <Col xs={1}></Col>
          <Col>
            <Row>
              <Col>
                <Image className="item-image" src={this.state.data.image} />
              </Col>
              <Col>
                <div>
                  <h1>{this.state.data.name}</h1>
                  <label>Price ${this.state.data.price}</label>
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
