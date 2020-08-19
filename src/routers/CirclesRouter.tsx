import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import {
  CircleNoticeContainer,
  CircleNoticeDetailContainer,
  CircleWantedContainer,
} from '../containers';
import { GlobalInnerBody } from '../GlobalStyle';

const CirclesRouter: FC<{}> = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route
          exact
          path="/circles/notice/:id"
          component={CircleNoticeDetailContainer}
        />
        <Route exact path="/circles/notice" component={CircleNoticeContainer} />
        <Route exact path="/circles/wanted" component={CircleWantedContainer} />
        <Route exact path="/circles/all" render={() => <div>all</div>} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default CirclesRouter;
