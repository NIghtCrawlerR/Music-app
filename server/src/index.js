const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const bodyparser = require('body-parser');

const typeDefs = require('./schema');
const resolvers = require('./resolvers');

const DeezerAPI = require('./datasources/deezer');

const app = express();
app.use(bodyparser());

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    deezerAPI: new DeezerAPI,
  }),
});

server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);
