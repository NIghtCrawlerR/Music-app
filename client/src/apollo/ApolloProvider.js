import React from 'react';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider as OriginalProvider } from '@apollo/react-hooks';
import PropTypes from 'prop-types';

const cache = new InMemoryCache();
const link = new HttpLink({
  uri: 'http://localhost:4000/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

const ApolloProvider = ({ children }) => (
  <OriginalProvider client={client}>
    {children}
  </OriginalProvider>
);

ApolloProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ApolloProvider;
