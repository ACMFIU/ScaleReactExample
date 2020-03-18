import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList
} from 'graphql';


const User = new GraphQLObjectType({
  name: "User",
  description: "This represents the user model",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(user){
          return user.id
        }
      },
      firstName: {
        type: GraphQLString,
        resolve(user){
          return user.firstName
        }
      },
      lastName: {
        type: GraphQLString,
        resolve(user){
          return user.lastName
        }
      },
      email: {
        type: GraphQLString,
        resolve(user){
          return user.email
        }
      },
      password: {
        type: GraphQLString,
        resolve(user){
          return user.password
        }
      },
    }
  }
});

const Book = new GraphQLObjectType({
  name: "Books",
  description: "This rprsents the books from the store",
  fields: () => {
    id: {
      type: GraphQLID,
      resolve(book){
        return book.id
      }
    },
    title: {
      type: GraphQLString,
      resolve(book){
        return book.title
      }
    },
    sku: {
      type: GraphQLString,
      resolve(book){
        return book.sku
      }
    },
    image: {
      type: GraphQLString,
      resolve(book){
        return book.image
      }
    },
    description: {
      type: GraphQLString,
      resolve(book){
        return book.description
      }
    },
    price: {
      type: GraphQLInt,
      resolve(book){
        return book.price
      }
    },
    qty: {
      type: GraphQLInt,
      resolve(book){
        return book.qty
      }
    },
    pdf: {
      type: GraphQLString,
      resolve(book){
        return book.pdf
      }
    },
  }
});
