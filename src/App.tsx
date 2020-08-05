import React from 'react';
import { FC } from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import { GlobalStyle } from './GlobalStyle';

const App: FC<{}> = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Navigation />
      <Switch></Switch>
    </BrowserRouter>
  );
};

export default App;
