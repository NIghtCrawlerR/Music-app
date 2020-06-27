import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AuthProvider from 'providers/AuthProvider';
import Root from 'components/Root';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
