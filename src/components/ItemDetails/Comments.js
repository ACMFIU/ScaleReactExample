import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

class Comments extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      query: "",
    }
  }

  render(){
    return (
      <Container>
        <Row className="item-comments-header">
          <Col><hr /></Col>
          <Col xs={2}>
            <h3>Comments</h3>
          </Col>
          <Col><hr /></Col>
        </Row>
        <Row className="item-comments">
          <Col xs={3}>
            <h4>UserName</h4>
          </Col>
          <Col>
            <label>title comment</label>
            <p>comment body</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Comments;
