import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ManagementEditContainer } from '../containers';
import { GlobalInnerBody } from '../GlobalStyle';


const ManagementRouter: FC = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route exact path="/management/edit" component={ManagementEditContainer} />
      </Switch>
    </GlobalInnerBody>
    );
}

export default ManagementRouter;        