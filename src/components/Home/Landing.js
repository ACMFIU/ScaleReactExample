import React from 'react';
import {Container, Row, Col, CardDeck, Card} from 'react-bootstrap';

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
          <CardDeck className="card-items">
          {this.state.books.map((book) => (
            <Card>
              <Card.Img variant="top" src={book.image} />
              <Card.Body>
                <Card.Title>{book.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
          </CardDeck>
          <CardDeck className="card-items">
          {this.state.shirts.map((shirt) => (
            <Card>
              <Card.Img variant="top" src={shirt.image} />
              <Card.Body>
                <Card.Title>{shirt.name}</Card.Title>
              </Card.Body>
            </Card>
          ))}
          </CardDeck>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default Landing;
