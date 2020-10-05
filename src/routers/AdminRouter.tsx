import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
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
} from '../containers';
import { GlobalInnerBody } from '../GlobalStyle';

const AdminRouter: FC<{}> = () => {
  return (
    <GlobalInnerBody>
      <Switch>
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
      </Switch>
    </GlobalInnerBody>
  );
};

export default AdminRouter;
