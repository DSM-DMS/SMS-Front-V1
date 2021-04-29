import React, { FC, Suspense, useEffect } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./lib/confirm/confirm.css";
import Channel from "./lib/channel.js";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import {
  PageNotFound,
  Navigation,
  Loading,
  Login,
  Register
} from "./components";
import { HeaderContainer, PasswordChangeContainer } from "./containers";
import { history } from "./modules/store";
import {
  LazyCircles,
  LazyMain,
  LazyManagement,
  LazyNotice,
  LazyOuting
} from "./routers/LazyLoaded";
import { closingCode } from "./lib/utils";

const App: FC<{}> = () => {
  useEffect(() => {
    if (localStorage.getItem("auto-login") !== "true") {
      window.onbeforeunload = closingCode;
    }

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
              <Route path="/pw-change" component={PasswordChangeContainer} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
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
