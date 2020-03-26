const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphql;
const SQLdb = require('./SQLSchema');

const Users = new GraphQLObjectType({
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

const Books = new GraphQLObjectType({
  name: "Books",
  description: "This rprsents the books from the store",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(book) {
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
        type: GraphQLFloat,
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
      authors: {
        type: Authors,
        resolve(book){
          return book.getAuthor();
        }
      }
    }
  }
});

const Authors = new GraphQLObjectType({
  name: "Authors",
  description: "This represents the authors for the books from the store",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(author){
          return author.id
        }
      },
      fname: {
        type: GraphQLString,
        resolve(author){
          return author.fname
        }
      },
      lname: {
        type: GraphQLString,
        resolve(author){
          return author.lname
        }
      },
      bio: {
        type: GraphQLString,
        resolve(author){
          return author.bio
        }
      },
      books: {
        type: new GraphQLList(Books),
        resolve(author){
          return author.getBooks();
        }
      }
    }
  }
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query',
  fields: {
      books: {
        type: new GraphQLList(Books),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return SQLdb.models.books.findAll({where: args});
        }
      },
      authors: {
        type: new GraphQLList(Authors),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return SQLdb.models.authors.findAll({where: args});
        }
      }
    }
});


const GraphSchema = new GraphQLSchema({
  query: RootQuery
});

module.exports = GraphSchema;
