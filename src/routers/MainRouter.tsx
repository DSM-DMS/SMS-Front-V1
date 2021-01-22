import React, { FC, ReactElement } from "react";
import { Switch, Route } from "react-router-dom";

import { PageNotFound } from "../components";
import { MainContainer } from "../containers";

interface Props {}

const MainRouter: FC<Props> = (): ReactElement => {
  return (
    <Switch>
      <Route path="/home/*" component={PageNotFound} />
      <Route path="/home" component={MainContainer} />
    </Switch>
  );
};

export default MainRouter;
