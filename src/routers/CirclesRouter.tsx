import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CircleNoticeContainer,
  CircleNoticeDetailContainer,
} from '../containers';

const CirclesRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route
        exact
        path="/circles/notice/:id"
        component={CircleNoticeDetailContainer}
      />
      <Route exact path="/circles/notice" component={CircleNoticeContainer} />
      <Route exact path="/circles/wanted" render={() => <div>wanted</div>} />
      <Route exact path="/circles/all" render={() => <div>all</div>} />
    </Switch>
  );
};

export default CirclesRouter;
