import React, { FC } from 'react';
import * as S from './styles';
import NavigationHeader from './header/NavigationHeader';
import NavigationBody from './body/NavigationBody';
import {
  BackgroundCircle1,
  BackgroundCircle2,
  BackgroundCircle3,
  BackgroundCircle4,
  BackgroundCircle5,
  BackgroundCircle6,
} from '../../assets';

const Navigation: FC = () => {
  return (
    <S.Container>
      <NavigationHeader />
      <NavigationBody />
      <S.BackgroundImgWrap>
        <S.Circle src={BackgroundCircle1} top={90} left={-80} />
        <S.Circle src={BackgroundCircle2} top={150} left={190} />
        <S.Circle src={BackgroundCircle3} top={450} left={-140} />
        <S.Circle src={BackgroundCircle4} top={410} left={0} />
        <S.Circle src={BackgroundCircle5} top={410} left={-40} />
        <S.Circle src={BackgroundCircle6} top={260} left={140} />
      </S.BackgroundImgWrap>
    </S.Container>
  );
};

export default Navigation;
