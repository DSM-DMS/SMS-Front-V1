import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const CirclesRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/circles/notice" render={() => <div>notice</div>} />
      <Route exact path="/circles/wanted" render={() => <div>wanted</div>} />
      <Route exact path="/circles/all" render={() => <div>all</div>} />
    </Switch>
  );
};

export default CirclesRouter;
