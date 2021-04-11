import React, { FC, useEffect } from "react";
import { Switch, Router, Route, Redirect } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import "./lib/confirm/confirm.css";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { PageNotFound, Navigation } from "./components";
import {
  LoginContainer,
  HeaderContainer,
  PasswordChangeContainer,
  RegisterContainer
} from "./containers";
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
  ManagementRouter
} from "./routers";
import { history } from "./modules/store";
import { ToastContainer } from "react-toastify";
import Channel from "./lib/channel.js";

const App: FC<{}> = () => {
  const isIE = /*@cc_on!@*/ false || !!(document as any).documentMode;
  if (isIE) {
    alert(
      "인터넷 익스플로러 브라우저 입니다.\n SMS는 공식적으로 IE를 지원하지 않습니다."
    );
    return (
      <div>
        <p>IE를 지원하지 않습니다. 타 브라우저로 접속해주세요.</p>
        <p>
          추천 브라우저 : <a href="https://www.google.co.kr/chrome/">크롬</a>
        </p>
      </div>
    );
  }

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
          <Switch>
            <Route path="/pw-change" component={PasswordChangeContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/register" component={RegisterContainer} />
            <Route path="/home" component={MainRouter} />
            <Route path="/notice" component={NoticeRouter} />
            <Route path="/circles" component={CirclesRouter} />
            <Route path="/outing" component={OutingRouter} />
            <Route path="/management" component={ManagementRouter} />
            <Redirect path="/" to="/home" />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </GlobalBody>
      </Router>
    </GlobalContainer>
  );
};

export default App;
