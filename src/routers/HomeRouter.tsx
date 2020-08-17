import React, { FC } from 'react';
import { Switch, Route } from 'react-router';

const HomeRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/home" render={() => <div>HOME</div>} />
    </Switch>
  );
};

export default HomeRouter;
