import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { toast } from "react-toastify";

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
  AdminNoticeEditContainer,
  AdminOutingOkContainer
} from "../containers";
import { GlobalInnerBody } from "../GlobalStyle";
import { TEACHER } from "../modules/action/header";
import { stateType } from "../modules/reducer";

const AdminRouter: FC = () => {
  const history = useHistory();
  const pathname = history.location.pathname;
  const noWhiteBack: string[] = ["login", "home", "pw-change"];
  const { type } = useSelector((state: stateType) => state.header);

  useEffect(() => {
    if (!(type === TEACHER || localStorage.getItem("sms-type") === TEACHER)) {
      toast.info("로그인 후 이용해주세요.");
      history.push("/admin/login");
    }
  }, []);

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
        <Route exact path="/admin/out/ok" component={AdminOutingOkContainer} />
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
