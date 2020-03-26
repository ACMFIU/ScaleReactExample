import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: props.match.params,
      query: gql`{books{title}}`,
    };
  }

  componentDidMount(){
    var item;
    if (this.state.data.hasOwnProperty('bookSKU')) {
      console.log(this.state.data.bookSKU);
      item = gql`
        {
          books(id: "${this.state.data.bookSKU}") {
            title
            sku
            image
            description
            price
            qty
            pdf
            authors {
              fname
              lname
              bio
            }
          }
        }
      `;
      this.setState({query: item});
    }
  }
  render(){
    console.log(this.state.query);
    return(
      <Container>
        <Row className="item-detail">
          <Col xs={1}></Col>
          <Query query={this.state.query}>
          {({loading, error, data}) => {
            if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
            if(error) return <p>Error!!</p>;

            return data.books.map(({title, sku, image, description, price, qty, pdf, fname, lname, bio}) => (
            <Col>
              <Row>
                <Col>
                  <Image className="item-image" src={image} />
                </Col>
                <Col>
                  <div>
                    <h1>{title}</h1>
                      <div>
                        <h3>by {fname} {lname}</h3>
                        <h5>ISBN: {sku} </h5>
                      </div>
                    <hr />
                    <h3>Price ${price}</h3>
                  </div>
                  <Button varient="primary" type="button" href={pdf}> PURCHASE </Button>
                  <Button variant="outline-dark">ADD TO WISHLIST</Button>
                </Col>
              </Row>
              <Row>
                <div class="item-description">
                  <h3>Description</h3>
                  <p>{description}</p>
                </div>
              </Row>
              <Row class="item-comments">
                <h3>Comments</h3>
                <p></p>
              </Row>
              <Row class="item-author-bio">
                <h3>About the Author</h3>
                <p>{bio}</p>
              </Row>
            </Col>
            ));
          }}
          </Query>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default ItemDetail;
