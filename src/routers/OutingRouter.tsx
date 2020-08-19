import React, { FC } from 'react';
import { Route, Switch } from 'react-router-dom';
import { GlobalInnerBody } from '../GlobalStyle';

const OutingRouter: FC<{}> = () => {
  return (
    <GlobalInnerBody>
      <Switch>
        <Route exact path="/outing/waring" render={() => <div>waring</div>} />
        <Route exact path="/outing/apply" render={() => <div>apply</div>} />
        <Route exact path="/outing/history" render={() => <div>history</div>} />
      </Switch>
    </GlobalInnerBody>
  );
};

export default OutingRouter;
