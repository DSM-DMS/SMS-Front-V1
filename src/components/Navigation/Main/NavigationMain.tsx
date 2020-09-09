import React, { FC } from 'react';
import * as S from './styles';
import NavigationHeader from './header/NavigationHeader';
import NavigationBody from './body/NavigationBody';
import {
  BackgroundCircle1 as BlueBackgroundCircle1,
  BackgroundCircle2 as BlueBackgroundCircle2,
  BackgroundCircle3 as BlueBackgroundCircle3,
  BackgroundCircle4 as BlueBackgroundCircle4,
  BackgroundCircle5 as BlueBackgroundCircle5,
  BackgroundCircle6 as BlueBackgroundCircle6,
  BackgroundCircle7 as MintBackgroundCircle1,
  BackgroundCircle8 as MintBackgroundCircle2,
  BackgroundCircle9 as MintBackgroundCircle3,
  BackgroundCircle10 as MintBackgroundCircle4,
} from '../../../assets';
import { RouteData } from '../../../lib/static';

interface Props {
  routeData: RouteData;
}

const NavigationMain: FC<Props> = ({ routeData }) => {
  return (
    <S.Container colorSet={routeData.color}>
      <NavigationHeader />
      <NavigationBody navItemArr={routeData.main} mainSubArr={routeData.sub} />
      <S.BackgroundImgWrap>
        {routeData.color === '#23B2AD' ? (
          <>
            <S.Circle src={MintBackgroundCircle1} top={150} left={190} />
            <S.Circle src={MintBackgroundCircle2} top={450} left={-140} />
            <S.Circle src={MintBackgroundCircle3} top={410} left={0} />
            <S.Circle src={MintBackgroundCircle4} top={410} left={-40} />
          </>
        ) : (
          <>
            <S.Circle src={BlueBackgroundCircle1} top={90} left={-80} />
            <S.Circle src={BlueBackgroundCircle2} top={150} left={190} />
            <S.Circle src={BlueBackgroundCircle3} top={450} left={-140} />
            <S.Circle src={BlueBackgroundCircle4} top={410} left={0} />
            <S.Circle src={BlueBackgroundCircle5} top={410} left={-40} />
            <S.Circle src={BlueBackgroundCircle6} top={260} left={140} />
          </>
        )}
      </S.BackgroundImgWrap>
    </S.Container>
  );
};

export default NavigationMain;
``;
