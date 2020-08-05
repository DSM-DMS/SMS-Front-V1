import React, { FC } from 'react';
import * as S from './styles';
import Circle1 from '../../assets/BackgroundCircle1.png';
import Circle2 from '../../assets/BackgroundCircle2.png';
import Circle3 from '../../assets/BackgroundCircle3.png';
import Circle4 from '../../assets/BackgroundCircle4.png';
import Circle5 from '../../assets/BackgroundCircle5.png';
import Circle6 from '../../assets/BackgroundCircle6.png';
import NavigationHeader from './header/NavigationHeader';
import NavigationBody from './body/NavigationBody';

const Navigation: FC = () => {
  return (
    <S.Container>
      <NavigationHeader />
      <NavigationBody />
      <S.BackgroundImgWrap>
        <S.Circle src={Circle1} top={90} left={-80} />
        <S.Circle src={Circle2} top={150} left={190} />
        <S.Circle src={Circle3} top={450} left={-140} />
        <S.Circle src={Circle4} top={410} left={0} />
        <S.Circle src={Circle5} top={410} left={-40} />
        <S.Circle src={Circle6} top={260} left={140} />
      </S.BackgroundImgWrap>
    </S.Container>
  );
};

export default Navigation;
