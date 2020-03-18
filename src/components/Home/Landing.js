import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';

const data = require("../../models/fake-data");

class Landing extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: data.books,
      shirts: data.shirts
    };
  }

  render(){
    return(
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Row className="item-rows">
              {this.state.books.map((book) => (
                <Link to={`/store/books/${book.sku}`}>
                  <div className="item-card">
                    <Image className="display-grid-img" src={book.image} />
                    <p>{book.name}</p>
                  </div>
                </Link>
              ))}
            </Row>
            <Row className="item-rows">
              {this.state.shirts.map((shirt) => (
                <Link to={`/store/shirts/${shirt.sku}`}>
                  <div className="item-card">
                    <Image className="display-grid-img" src={shirt.image} />
                    <p>{shirt.name}</p>
                  </div>
                </Link>
              ))}
          </Row>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
