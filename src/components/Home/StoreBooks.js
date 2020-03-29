import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

const getBooks = gql`
  {
    books {
      id
      title
      image
    }
  }
`;

class StoreBooks extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      books: this.props.data
    };

  }

  render(){
    return(
      <Container>
        <Row>
          <Col xs={2}></Col>
          <Col>
            <Row className="item-rows">
              <Query query={getBooks}>
                {({loading, error, data}) => {
                  if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
                  if(error) return <p>Error!!</p>;

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
            </Row>
          </Col>
          <Col xs={2}></Col>
        </Row>
      </Container>
    );
  }
}

export default StoreBooks;
