import React, { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Switch, BrowserRouter, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import { GlobalStyle, GlobalContainer, GlobalBody } from "./GlobalStyle";
import { Header } from "./components";
import {
  CirclesRouter,
  NoticeRouter,
  OutingRouter,
  MainRouter,
  AdminRouter,
  ManagementRouter
} from "./routers";
import { jsonActionCreater } from "./modules/action/json";
import { stateType } from "./modules/reducer";
import { decreaseAsync, increaseAsync } from "./modules/action/counter";

const App: FC<{}> = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((state: stateType) => state.counter);
  const [c, sC] = useState<number>(1);
  const onIncrease = () => {
    dispatch(increaseAsync());
  };

  const onDecrease = () => {
    dispatch(decreaseAsync());
  };

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
          <h1>{count}</h1>
          <button onClick={onIncrease}>+1</button>
          <button onClick={onDecrease}>-1</button>
          <Switch>
            <Route path="/home" component={MainRouter} />
            <Route path="/notice" component={NoticeRouter} />
            <Route path="/circles" component={CirclesRouter} />
            <Route path="/outing" component={OutingRouter} />
            <Route path="/admin" component={AdminRouter} />
            <Route path="/management" component={ManagementRouter} />
          </Switch>
        </GlobalBody>
      </BrowserRouter>
    </GlobalContainer>
  );
};

export default App;
