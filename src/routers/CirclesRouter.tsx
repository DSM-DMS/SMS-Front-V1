import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { GlobalInnerBody } from "../GlobalStyle";
import {
  CircleNoticeListContainer,
  CircleNoticeDetailContainer,
  CircleWantedListContainer,
  CircleAllContainer,
  CircleAllDetailContainer,
  CircleWantedDetailContainer
} from "../containers";

const CirclesRouter: FC<{}> = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route
          exact
          path="/circles/notice/:id"
          component={CircleNoticeDetailContainer}
        />
        <Route
          exact
          path="/circles/notice"
          component={CircleNoticeListContainer}
        />
        <Route
          exact
          path="/circles/wanted"
          component={CircleWantedListContainer}
        />
        <Route
          exact
          path="/circles/wanted/:id"
          component={CircleWantedDetailContainer}
        />
        <Route
          exact
          path="/circles/all/:id"
          component={CircleAllDetailContainer}
        />
        <Route exact path="/circles/all" component={CircleAllContainer} />
        <Redirect to="/circles/notice" />
      </Switch>
    </GlobalInnerBody>
  );
};

export default CirclesRouter;
