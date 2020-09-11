import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AdminOutingWaitListContainer } from '../containers';

const AdminRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/admin/schedule" />
      <Route
        exact
        path="/admin/outing"
        component={AdminOutingWaitListContainer}
      />
      <Route exact path="/admin/notice" />
    </Switch>
  );
};

export default AdminRouter;
