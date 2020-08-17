import React, { FC, useState, useCallback, MouseEvent } from 'react';
import * as S from './styles';
import NavigationSubHeader from './Header/NavigationSubHeader';
import NavigationSubBody from './Body/NavigationSubBody';
import { CloseMenu } from '../../../assets';
import { useSelector } from 'react-redux';
import { stateType } from '../../../modules/reducer';

const NavigationSub: FC<{}> = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const mainUrl = useSelector((store: stateType) => store.page.mainUrl);
  const isActive = mainUrl === '동아리' || mainUrl === '외출신청';

  const changeIsClose = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsClose((prev) => !prev);
  }, []);

  return (
    <S.Container isActive={isActive} isClose={isActive && isClose}>
      {!isClose && isActive && (
        <>
          <NavigationSubHeader>{mainUrl}</NavigationSubHeader>
          <NavigationSubBody page={mainUrl} />
        </>
      )}

      {isActive && (
        <S.CenterImg
          onClick={changeIsClose}
          src={CloseMenu}
          isClose={isClose}
        />
      )}
    </S.Container>
  );
};

export default NavigationSub;
