import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

class SearchResults extends React.Component {
constructor(props){
  super(props);
  console.log(props.match.params.search);
  this.state = {
    errorBook: false,
    queryBook: gql`
      {
        books(title: "${props.match.params.search}") {
          id
          title
          image
        }
      }
      `,
    queryItems: gql`
      {
        items(name: "${props.match.params.search}", size: "S") {
          id
          name
          image
        }
      }
      `,
    };
  }

  render(){
    return(
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Row className="item-rows">
              <Query query={this.state.queryBook}>
                {({loading, error, data}) => {
                  if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
                  if(error) {this.setState({errorBook: true})};

                  return data.books.map(({id, title, image,}) => (
                    <Link to={`/shop/books/${id}`}>
                      <div className="item-card">
                        <div>
                          <Image className="display-grid-img" src={image} />
                        </div>
                        <hr />
                        <div>
                          <p>{title}</p>
                        </div>
                      </div>
                    </Link>
                  ));
                }}
              </Query>

              <Query query={this.state.queryItems}>
                {({loading, error, data}) => {
                  if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
                  if(error) return <p>Error!!</p>;

                  return data.items.map(({id, type, name, image,}) => (
                    <Link to={`/shop/${type}/${id}`}>
                      <div className="item-card">
                        <div>
                          <Image className="display-grid-img" src={image} />
                        </div>
                        <hr />
                        <div>
                          <p>{name}</p>
                        </div>
                      </div>
                    </Link>
                  ));
                }}
              </Query>
            </Row>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default SearchResults;
