import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { Header, PageNotFound } from "./components";
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
  AdminRouter,
  ManagementRouter,
} from './routers';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { jsonActionCreater } from './modules/action/json';

const App: FC<{}> = () => {
  const dispatch = useDispatch();  
  useEffect(() => {
    dispatch(jsonActionCreater.getJsonSaga());
  }, []);

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
            <Route path="/admin" component={AdminRouter} />
            <Route path="/management" component={ManagementRouter} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
