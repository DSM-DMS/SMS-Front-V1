import React, { FC } from 'react';
import NavigationMain from './Main/NavigationMain';
import * as S from './styles';
import NavigationSub from './Sub/NavigationSub';

const Navigation: FC = () => {
  return (
    <S.Container>
      <NavigationMain />
      <NavigationSub />
    </S.Container>
  );
};

export default Navigation;
