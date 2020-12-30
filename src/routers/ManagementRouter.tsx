import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";
import {
  ManagementNoticeContainer,
  ManagementNoticeDetailContainer,
  ManagementNoticeEditContainer,
  ManagementWantedDetailContainer,
  ManagementInfoContainer,
  ManagementNoticeWriteContainer
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

        <Route
          exact
          path="/management/wanted"
          component={ManagementWantedDetailContainer}
        />

        <Route
          exact
          path="/management/edit"
          component={ManagementInfoContainer}
        />

        <Route
          exact
          path="/management/write"
          component={ManagementNoticeWriteContainer}
        />
      </Switch>
    </GlobalInnerBody>
  );
};

export default ManagementRouter;
