import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import {
  ManagementNoticeContainer,
  ManagementNoticeDetailContainer,
  ManagementNoticeEditContainer
} from "../containers";
import { GlobalInnerBody } from "../GlobalStyle";

const ManagementRouter: FC = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route
          exact
          path="/management/notice"
          component={ManagementNoticeContainer}
        />

        <Route
          exact
          path="/management/notice/:id"
          component={ManagementNoticeDetailContainer}
        />

        <Route
          exact
          path="/management/edit/:id"
          component={ManagementNoticeEditContainer}
        />
      </Switch>
    </GlobalInnerBody>
  );
};

export default ManagementRouter;
