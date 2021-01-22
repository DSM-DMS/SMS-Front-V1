import React, { FC, memo } from "react";
import NavigationMain from "./Main/NavigationMain";
import * as S from "./styles";
import NavigationSub from "./Sub/NavigationSub";
import { Route, Switch } from "react-router";
import {
  adminRouter,
  userRoute,
  subNavRouter,
  managementRouter
} from "../../lib/static";

const Navigation: FC = () => {
  return (
    <S.Container>
      <Switch>
        <Route
          path="/admin"
          render={() => {
            return <NavigationMain routeData={adminRouter} />;
          }}
        />
        <Route
          path="/management"
          render={() => {
            return <NavigationMain routeData={managementRouter} />;
          }}
        />
        <Route
          render={() => {
            return <NavigationMain routeData={userRoute} />;
          }}
        />
      </Switch>
      <NavigationSub subRouteData={subNavRouter} />
    </S.Container>
  );
};

export default memo(Navigation);
