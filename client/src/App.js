import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import ApolloProvider from 'apollo';
import AuthProvider from 'providers/AuthProvider';
import Root from 'components/Root';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ApolloProvider>
        <AuthProvider>
          <Root />
        </AuthProvider>
      </ApolloProvider>
    </BrowserRouter>
  );
}

export default App;
