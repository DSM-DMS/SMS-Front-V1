import React, { FC, ReactElement } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MainContainer } from '../containers';

interface Props {}

const MainRouter: FC<Props> = (): ReactElement => {
  return (
    <Switch>
      <Route path="/" component={MainContainer} />
    </Switch>
  );
};

export default MainRouter;
