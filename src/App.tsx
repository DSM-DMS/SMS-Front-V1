import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";

import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { PageNotFound, Navigation } from "./components";
import { LoginContainer, HeaderContainer } from "./containers";
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
  AdminRouter,
  ManagementRouter
} from "./routers";
import { jsonActionCreater } from "./modules/action/json";
import { getTimetablesSaga } from "./modules/action/main";
import { stateType } from "./modules/reducer";
import { STUDENT } from "./modules/action/header";

const App: FC<{}> = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state: stateType) => state.header);

  useEffect(() => {
    if (type === STUDENT) {
      dispatch(getTimetablesSaga());
    }
  }, [type]);

  useEffect(() => {
    dispatch(jsonActionCreater.getJsonSaga());
  }, []);

  return (
    <GlobalContainer>
      <GlobalStyle />
      <BrowserRouter>
        <Navigation />
        <GlobalBody>
          <HeaderContainer />
          <Switch>
            <Route path="/login" component={LoginContainer} />
            <Route path="/home" component={MainRouter} />
            <Route path="/notice" component={NoticeRouter} />
            <Route path="/circles" component={CirclesRouter} />
            <Route path="/outing" component={OutingRouter} />
            <Route path="/admin" component={AdminRouter} />
            <Route path="/management" component={ManagementRouter} />
            <Redirect path="/" to="/home" />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
