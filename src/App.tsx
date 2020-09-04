import React, { FC } from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { GlobalStyle, GlobalContainer, GlobalBody } from './GlobalStyle';
import { Header } from './components';
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
} from './routers';

const App: FC<{}> = () => {
  return (
    <GlobalContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <GlobalBody>
          <Header />
          <Switch>
            <Route path="/home" component={MainRouter} />
            <Route path="/notice" component={NoticeRouter} />
            <Route path="/circles" component={CirclesRouter} />
            <Route path="/outing" component={OutingRouter} />
          </Switch>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
