import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  WarningContainer,
  ApplyContainer,
  HistoryContainer,
} from '../containers';

const OutingRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/outing/waring" render={WarningContainer} />
      <Route exact path="/outing/apply" render={ApplyContainer} />
      <Route exact path="/outing/history" render={HistoryContainer} />
    </Switch>
  );
};

export default OutingRouter;
