import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import NoticeContainer from '../containers/Notice/NoticeContainer';

const NoticeRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/notice" component={NoticeContainer} />
    </Switch>
  );
};

export default NoticeRouter;
