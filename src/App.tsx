import React, { FC } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import {
  GlobalStyle,
  GlobalContainer,
  GlobalBody,
  GlobalInnerBody,
} from './GlobalStyle';
import {
  CirclesRouter,
  HomeRouter,
  NoticeRouter,
  OutingRouter,
} from './routers';

const App: FC<{}> = () => {
  return (
    <GlobalContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <GlobalBody>
          <Header />
          <GlobalInnerBody>
            <Switch>
              <Route path="/home" component={HomeRouter} />
              <Route path="/notice" component={NoticeRouter} />
              <Route path="/circles" component={CirclesRouter} />
              <Route path="/outing" component={OutingRouter} />
              <Redirect to="/home" />
            </Switch>
          </GlobalInnerBody>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

const Header: FC<{}> = () => {
  return (
    <div
      style={{
        textAlign: 'right',
        height: '100px',
        backgroundColor: 'none',
        width: '100%',
      }}
    >
      HEADER
    </div>
  );
};

export default App;
