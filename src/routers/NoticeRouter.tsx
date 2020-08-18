import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { NoticeListContainer, NoticeDetailContainer } from '../containers';

const NoticeRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/notice" component={NoticeListContainer} />
      <Route exact path="/notice/:id" component={NoticeDetailContainer} />
    </Switch>
  );
};

export default NoticeRouter;
