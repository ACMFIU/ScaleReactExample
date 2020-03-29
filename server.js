const Express = require('express');
const GraphHTTP = require('express-graphql');
const GraphSchema = require('./src/models/GraphQLSchema');
const cors = require('cors');
const port = 4000;

const api = Express();

api.use(cors());
api.use('/graphql', GraphHTTP({
  schema: GraphSchema,
  pretty: true,
  graphiql: true
}));





api.listen(port, () => {
  console.log('Server running on port: ', port);
});

module.exports = api;
