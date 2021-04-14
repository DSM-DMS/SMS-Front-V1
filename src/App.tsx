import React, { FC, Suspense, useEffect } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./lib/confirm/confirm.css";
import Channel from "./lib/channel.js";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { PageNotFound, Navigation, Loading } from "./components";
import { HeaderContainer } from "./containers";
import { history } from "./modules/store";
import {
  LazyCircles,
  LazyLogin,
  LazyMain,
  LazyManagement,
  LazyNotice,
  LazyOuting,
  LazyPasswordChange,
  LazyRegister
} from "./routers/LazyLoaded";

const App: FC<{}> = () => {
  useEffect(() => {
    Channel(process.env.CHANNEL_PLUGIN_KEY);
  }, []);

  return (
    <GlobalContainer>
      <GlobalStyle />
      <Router history={history}>
        <ToastContainer autoClose={2000} />
        <Navigation />
        <GlobalBody>
          <HeaderContainer />
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/pw-change" component={LazyPasswordChange} />
              <Route path="/login" component={LazyLogin} />
              <Route path="/register" component={LazyRegister} />
              <Route path="/home" component={LazyMain} />
              <Route path="/notice" component={LazyNotice} />
              <Route path="/circles" component={LazyCircles} />
              <Route path="/outing" component={LazyOuting} />
              <Route path="/management" component={LazyManagement} />
              <Redirect path="/" to="/home" />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </Suspense>
        </GlobalBody>
      </Router>
    </GlobalContainer>
  );
};

export default App;
