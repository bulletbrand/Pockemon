import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary } from 'src/components';
import Routes from 'src/routes';

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
