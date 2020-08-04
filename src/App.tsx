import React from 'react';
import { FC } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default App;
