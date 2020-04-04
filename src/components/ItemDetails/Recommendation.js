import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Row, Col, Image} from 'react-bootstrap';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ReactLoading from "react-loading";

class Recommendation extends React.Component {
  constructor(props){
    super(props);
    const id = this.props.maker;
    const type = this.props.type;
    console.log(id);
    var query;
    if(type === "books"){
      query = gql`
        {
          authors(id: "${id}"){
            books {
              id
              title
              image
            }
          }
        }`;
    } else if(type === "shirts"){
      query = gql`
        {
          manufacturers(id: "${id}"){
            items{
              id
              name
              image
            }
          }
        }`;
    }

    this.state= {
      query: query,
      type: type
    }
  }


  render(){
    var content;
    if(this.state.type === "books"){
      content = <Query query={this.state.query}>
        {({loading, error, data}) => {
          if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
          if(error) return <p>Error!!</p>;

          return data.authors.map(({books}) =>(books.map(({id, title, image,}) => (
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
          ))));
        }}
      </Query>;
    } else if(this.state.type === "shirts"){
      content = <Query query={this.state.query}>
        {({loading, error, data}) => {
          if(loading) return <ReactLoading className="loadingAnimation" type={"bars"} color={"black"} height={'30%'}  width={'30%'}/>;
          if(error) return <p>Error!!</p>;
          console.log(data);
          return data.manufacturers.map(({items}) =>(items.map(({id, name, image,}) => (
            <Link to={`/shop/shirts/${id}`}>
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
          ))));
        }}
      </Query>;
    }

    return(
    <Container>
      <Row>
        <Col xs={2}></Col>
        <Col>
          <Row className="item-recommendation-rows">
            <div classNamee="wrapper">
              {content}
            </div>
          </Row>
        </Col>
        <Col xs={2}></Col>
      </Row>
    </Container>
    );
  }
}

export default Recommendation;
