import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

const OutsideRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/outside/waring" render={() => <div>waring</div>} />
      <Route exact path="/outside/apply" render={() => <div>apply</div>} />
      <Route exact path="/outside/history" render={() => <div>history</div>} />
    </Switch>
  );
};

export default OutsideRouter;
