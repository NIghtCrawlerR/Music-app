const { makeExecutableSchema } = require('graphql-tools');

const { query } = require('./typeDefs');
const resolvers = require('./resolvers');

const Query = `
  type Query {
    _empty: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [Query, ...query],
  resolvers,
});

module.exports = schema;
