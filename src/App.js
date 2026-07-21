import React, { Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { CLIENT_ROUTES } from './clients/registry';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Suspense fallback={<div className="loading">Loading signature generator...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            {CLIENT_ROUTES.flatMap((client) => [
              <Route
                key={client.route}
                exact
                path={client.route}
                component={client.component}
              />,
              <Route
                key={client.versionRoute}
                exact
                path={client.versionRoute}
                component={client.component}
              />
            ])}
            <Route component={NotFound} />
          </Switch>
        </Suspense>
        <footer className="app-footer">
          Developed by{' '}
          <a href="https://www.okmg.com/" target="_blank" rel="noopener noreferrer">OKMG</a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
