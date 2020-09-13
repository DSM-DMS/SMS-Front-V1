import React, { FC, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import * as S from './style';

import { stateType } from '../../modules/reducer';
import { setUser } from '../../modules/action/header';

const Header: FC<{}> = () => {
  const dispatch = useDispatch();
  const { info } = useSelector((state: stateType) => state.header);

  useEffect(() => {
    dispatch(setUser('2학년 3반  1번 강신희'));
  }, []);

  return (
    <S.HeaderWrap>
      <span>{info}</span>
      <button>로그아웃</button>
    </S.HeaderWrap>
  );
};

export default Header;
