import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import { NoticeListContainer, NoticeDetailContainer } from '../containers';
import { GlobalInnerBody } from '../GlobalStyle';

const NoticeRouter: FC<{}> = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route exact path="/notice" component={NoticeListContainer} />
        <Route exact path="/notice/:id" component={NoticeDetailContainer} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default NoticeRouter;
