import React, { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import { PageNotFound } from "../components";
import {
  WarningContainer,
  ApplyContainer,
  HistoryContainer
} from "../containers";
import { STUDENT } from "../modules/action/header";
import { stateType } from "../modules/reducer";

const OutingRouter: FC<{}> = () => {
  const { type } = useSelector((state: stateType) => state.header);

  useEffect(() => {
    if (!(type === STUDENT || localStorage.getItem("sms-type") === STUDENT)) {
      alert("로그인 후 이용해주세요.");
      window.location.href = "/login";
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/outing/warning" component={WarningContainer} />
      <Route exact path="/outing/apply" component={ApplyContainer} />
      <Route exact path="/outing/history" component={HistoryContainer} />
      <Route path="/outing/*" component={PageNotFound} />
    </Switch>
  );
};

export default OutingRouter;
