import React, { FC } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { GlobalStyle, GlobalContainer, GlobalBody } from './GlobalStyle';
import { CirclesRouter } from './routers/index';

const App: FC<{}> = () => {
  return (
    <GlobalContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <GlobalBody>
          <Header />
          <Switch>
            <Route exact path="/circles" component={CirclesRouter} />
          </Switch>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

const Header: FC<{}> = () => {
  return (
    <div
      style={{ height: '100px', backgroundColor: 'red', width: '100%' }}
    ></div>
  );
};

export default App;
