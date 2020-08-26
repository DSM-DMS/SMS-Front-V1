import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalInnerBody } from '../GlobalStyle';
import {
  CircleNoticeListContainer,
  CircleNoticeDetailContainer,
  CircleWantedListContainer,
  CircleAllContainer,
  CircleAllDetailContainer,
} from '../containers';

const CirclesRouter: FC<{}> = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route
          exact
          path="/circles/notice/:id"
          component={CircleNoticeDetailContainer}
        />
        <Route
          exact
          path="/circles/notice"
          component={CircleNoticeListContainer}
        />
        <Route
          exact
          path="/circles/wanted"
          component={CircleWantedListContainer}
        />
        <Route
          exact
          path="/circles/wanted/:id"
          component={CircleAllDetailContainer}
        />
        <Route exact path="/circles/all" component={CircleAllContainer} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default CirclesRouter;
