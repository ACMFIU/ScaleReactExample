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
  description: "This represents the books from the store",
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

const Items = new GraphQLObjectType({
  name: "Items",
  description: "This represents items from the store",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(item) {
          return item.id
        }
      },
      name: {
        type: GraphQLString,
        resolve(item){
          return item.name
        }
      },
      type: {
        type: GraphQLString,
        resolve(item){
          return item.type
        }
      },
      sku: {
        type: GraphQLString,
        resolve(item){
          return item.sku
        }
      },
      image: {
        type: GraphQLString,
        resolve(item){
          return item.image
        }
      },
      description: {
        type: GraphQLString,
        resolve(item){
          return item.description
        }
      },
      price: {
        type: GraphQLFloat,
        resolve(item){
          return item.price
        }
      },
      size: {
        type: GraphQLString,
        resolve(item){
          return item.size
        }
      },
      qty: {
        type: GraphQLInt,
        resolve(item){
          return item.qty
        }
      },
      manufacturer: {
        type: Manufacturers,
        resolve(item){
          return item.getManufacturer();
        }
      }
    }
  }
});

const Manufacturers = new GraphQLObjectType({
  name: "Manufacturers",
  description: "This represents the manufacturers for the items from the store",
  fields: () => {
    return {
      id: {
        type: GraphQLID,
        resolve(manufacturer){
          return manufacturer.id
        }
      },
      name: {
        type: GraphQLString,
        resolve(manufacturer){
          return manufacturer.name
        }
      },
      bio: {
        type: GraphQLString,
        resolve(manufacturer){
          return manufacturer.bio
        }
      },
      items: {
        type: new GraphQLList(Items),
        resolve(manufacturer){
          return manufacturer.getItems();
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
          },
          title: {
            type: GraphQLString
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
      },
      items: {
        type: new GraphQLList(Items),
        args: {
          id: {
            type: GraphQLID
          },
          size: {
            type: GraphQLString
          },
          name: {
            type: GraphQLString
          }
        },
        resolve(root, args){
          return SQLdb.models.items.findAll({where: args});
        }
      },
      manufacturers: {
        type: new GraphQLList(Manufacturers),
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(root, args){
          return SQLdb.models.manufacturers.findAll({where: args});
        }
      }
    }
});


const GraphSchema = new GraphQLSchema({
  query: RootQuery
});

module.exports = GraphSchema;
