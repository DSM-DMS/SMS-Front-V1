import React, { FC } from "react";
import { Route, Switch } from "react-router-dom";

import { PageNotFound } from "../components";
import {
  WarningContainer,
  ApplyContainer,
  HistoryContainer
} from "../containers";

const OutingRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/outing/waring" component={WarningContainer} />
      <Route exact path="/outing/apply" component={ApplyContainer} />
      <Route exact path="/outing/history" component={HistoryContainer} />
      <Route path="/outing/*" component={PageNotFound} />
    </Switch>
  );
};

export default OutingRouter;
