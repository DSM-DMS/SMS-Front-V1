import React, { FC, useEffect } from 'react';
import NavigationMain from './Main/NavigationMain';
import * as S from './styles';
import NavigationSub from './Sub/NavigationSub';
import { useDispatch } from 'react-redux';
import { pageMove, subPageMove } from '../../modules/action/page';
import { getNavUrl } from '../../lib/api';

const Navigation: FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const { mainUrl, subUrl } = getNavUrl(window.location.href);
    dispatch(pageMove(mainUrl));
    dispatch(subPageMove(subUrl));
  }, []);

  return (
    <S.Container>
      <NavigationMain />
      <NavigationSub />
    </S.Container>
  );
};

export default Navigation;
