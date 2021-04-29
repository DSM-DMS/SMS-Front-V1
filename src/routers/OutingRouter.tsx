import React, { FC } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import { PageNotFound, OutingApply, OutingHistory } from "../components";
import { WarningContainer } from "../containers";

const OutingRouter: FC<{}> = () => {
  return (
    <Switch>
      <Route exact path="/outing/apply" component={OutingApply} />
      <Route exact path="/outing/history" component={OutingHistory} />
      <Route exact path="/outing/warning" component={WarningContainer} />
      <Route path="/outing/*" component={PageNotFound} />
      <Redirect to="/outing/apply" path="/outing" />
    </Switch>
  );
};

export default OutingRouter;
