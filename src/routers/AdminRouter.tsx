import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  AdminOutingCertifiedListContainer,
  AdminOutingNowListContainer,
  AdminOutingWaitListContainer,
  AdminMainContainer,
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
        <Route exact path="/admin/notice" />
      </Switch>
    </GlobalInnerBody>
  );
};

export default AdminRouter;
