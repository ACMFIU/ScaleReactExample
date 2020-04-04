import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";
import Popup from 'reactjs-popup';
import Comments from './Comments';
import Recommendation from './Recommendation';

class ItemDetail extends React.Component {
  constructor(props){
    super(props);
    const data = props.match.params;
    var item;
    var type;
    this.zoom = false;
    this.state = {
      data: props.match.params,
      query: gql`{books{title}}`,
      type: "",
    };
    if (data.hasOwnProperty('bookSKU')) {
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
              id
              fname
              lname
              bio
            }
          }
        }
      `;
      type = "books";
    } else if (data.hasOwnProperty('shirtSKU')){
      item = gql`
        {
          items(id: "${this.state.data.shirtSKU}") {
            name
            sku
            image
            description
            price
            qty
            manufacturer {
              id
              name
              bio
            }
          }
        }
      `;
      type = "shirts";
    }

    this.state = {
      query: item,
      type: type
    };

  }

  toggleZoom(){
    this.zoom = !this.zoom;
    console.log(this.zoom)
  }

  render(){
    return(
      <Container>
        <Row className="item-detail">
          <Col xs={1}></Col>
          <Query query={this.state.query}>
          {({loading, error, data}) => {
            if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
            if(error) return <p>Error!!</p>;
            if(this.state.type === "shirts"){
              return data.items.map(({name, sku, image, description, price, qty, manufacturer,}) => (
              <Col>
                <Row>
                  <Col>
                    <Popup modal trigger={<Button variant="link"><Image className="item-image" src={image} /></Button>}>
                      <Image className="item-image-zoom" src={image} />
                    </Popup>
                  </Col>
                  <Col>
                    <div>
                      <h1>{name}</h1>
                        <div>
                          <h3>by {manufacturer.name} </h3>
                          <h5>SKU: {sku} </h5>
                        </div>
                      <hr />
                      <h3>Price ${price}</h3>
                    </div>
                    <div className="btn-items">
                      <Button className="btn-cart" varient="primary" type="button"> ADD TO CART </Button>
                      <Button className="btn-wish" variant="outline-dark">ADD TO WISHLIST</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="item-description">
                    <h3>Description</h3>
                    <p>{description}</p>
                  </div>
                </Row>
                <Comments />
                <Row>
                  <div className="item-author-bio">
                    <h3>About the Manufacturer</h3>
                    <p>{manufacturer.bio}</p>
                  </div>
                </Row>
                <Row>
                  <Recommendation maker={manufacturer.id} type={this.state.type}/>
                </Row>
              </Col>
              ));
            } else if(this.state.type === "books"){
              return data.books.map(({title, sku, image, description, price, qty, pdf, authors,}) => (
              <Col>
                <Row>
                  <Col>
                  <Popup modal trigger={<Button variant="link"><Image className="item-image" src={image} /></Button>}>
                    <Image className="item-image-zoom" src={image} />
                  </Popup>
                  </Col>
                  <Col>
                    <div>
                      <h1>{title}</h1>
                        <div>
                          <h3>by {authors.fname} {authors.lname}</h3>
                          <h5>ISBN: {sku} </h5>
                        </div>
                      <hr />
                      <h3>Price ${price}</h3>
                    </div>
                    <div className="btn-items">
                      <Button className="btn-cart" varient="primary" type="button" href={pdf}> PURCHASE </Button>
                      <Button className="btn-wish" variant="outline-dark">ADD TO WISHLIST</Button>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <div className="item-description">
                    <h3>Description</h3>
                    <p>{description}</p>
                  </div>
                </Row>
                <Comments />
                <Row>
                  <div className="item-author-bio">
                    <h3>About the Author</h3>
                    <p>{authors.bio}</p>
                  </div>
                </Row>
                <Row>
                  <Recommendation maker={authors.id} type={this.state.type}/>
                </Row>
              </Col>
              ));
            }
          }}
          </Query>
          <Col xs={1}></Col>
        </Row>
      </Container>
    );
  }
}

export default ItemDetail;
