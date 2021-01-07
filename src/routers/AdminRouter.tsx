import React, { FC } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";

import {
  AdminOutingCertifiedListContainer,
  AdminOutingNowListContainer,
  AdminOutingWaitListContainer,
  AdminMainContainer,
  AdminNoticeAllListContainer,
  AdminNoticeAllDetailContainer,
  AdminNoticeMineContainer,
  AdminNoticeWritingContainer,
  LoginContainer,
  PasswordChangeContainer,
  AdminOutingDoneContainer,
  AdminNoticeMineDetailContainer,
  ManagementNoticeEditContainer,
  AdminNoticeEditContainer
} from "../containers";
import { GlobalInnerBody } from "../GlobalStyle";

const AdminRouter: FC<{}> = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const noWhiteBack: string[] = ["login", "home", "pw-change"];

  return (
    <GlobalInnerBody
      isBackNeed={!noWhiteBack.some(path => pathname.includes(path))}
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
          path="/admin/out/done"
          component={AdminOutingDoneContainer}
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
          path="/admin/notice/edit/:id"
          component={AdminNoticeEditContainer}
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
