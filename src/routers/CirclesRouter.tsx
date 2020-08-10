import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const CirclesRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/circles/" render={() => <div>Circle Index</div>} />
    </Switch>
  );
};

export default CirclesRouter;
