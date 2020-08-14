import React, { FC } from 'react';
import { Switch, Route } from 'react-router';

const NoticeRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/notice" render={() => <div>NOTICE</div>} />
    </Switch>
  );
};

export default NoticeRouter;
