import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import {
  AdminOutingCertifiedListContainer,
  AdminOutingNowListContainer,
  AdminOutingWaitListContainer,
  AdminMainContainer,
  AdminNoticeAllListContainer,
  AdminNoticeAllDetailContainer,
  AdminNoticeMineContainer,
  AdminNoticeMineDetailContainer,
  AdminNoticeWritingContainer,
  LoginContainer,
  PasswordChangeContainer
} from "../containers";
import { GlobalInnerBody } from "../GlobalStyle";

const AdminRouter: FC<{}> = () => {
  const pathname = location.pathname;

  return (
    <GlobalInnerBody
      isBackNeed={!(pathname.includes("login") || pathname.includes("home"))}
    >
      <Switch>
        <Route
          exact
          path="/admin/pw-change"
          component={PasswordChangeContainer}
        />
        <Route exact path="/admin/login" component={LoginContainer} />
        <Route exact path="/admin/home" component={AdminMainContainer} />
        <Route exact path="/admin/schedule" />
        <Route
          exact
          path="/admin/out/wait"
          component={AdminOutingWaitListContainer}
        />
        <Route
          exact
          path="/admin/out/now"
          component={AdminOutingNowListContainer}
        />
        <Route
          exact
          path="/admin/out/certified"
          component={AdminOutingCertifiedListContainer}
        />
        <Route
          exact
          path="/admin/notice/all"
          component={AdminNoticeAllListContainer}
        />
        <Route
          exact
          path="/admin/notice/all/:id"
          component={AdminNoticeAllDetailContainer}
        />
        <Route
          exact
          path="/admin/notice/mine"
          component={AdminNoticeMineContainer}
        />
        <Route
          exact
          path="/admin/notice/mine/:id"
          component={AdminNoticeMineDetailContainer}
        />
        <Route
          exact
          path="/admin/notice/writing"
          component={AdminNoticeWritingContainer}
        />
        <Redirect path="/admin" to="/admin/home" />
      </Switch>
    </GlobalInnerBody>
  );
};

export default AdminRouter;
