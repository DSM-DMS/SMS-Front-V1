import React, { FC, useEffect } from "react";
import NavigationMain from "./Main/NavigationMain";
import * as S from "./styles";
import NavigationSub from "./Sub/NavigationSub";
import { useDispatch } from "react-redux";
import { pageMove, subPageMove } from "../../modules/action/page";
import { getNavUrl } from "../../lib/api";
import { Route, Switch } from "react-router";
import {
  adminRouter,
  userRoute,
  subNavRouter,
  managementRouter
} from "../../lib/static";

const Navigation: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { mainUrl, subUrl } = getNavUrl(window.location.href);
    dispatch(pageMove(mainUrl));
    dispatch(subPageMove(subUrl));
  }, []);

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

export default Navigation;
