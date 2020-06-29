const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const DeezerAPI = require('./datasources/deezer');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    deezerAPI: new DeezerAPI,
  }),
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
