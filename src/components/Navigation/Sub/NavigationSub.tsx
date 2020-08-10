import React, { FC, useState, useCallback, MouseEvent } from 'react';
import * as S from './styles';
import { useSelector } from 'react-redux';
import { stateType } from '../../../modules/reducer';
import { CloseMenu } from '../../../assets';

const NavigationSub: FC<{}> = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const page = useSelector((state: stateType) => state.page);
  const isActive = page === '동아리' || page === '외출신청';

  const changeIsClose = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsClose((prev) => !prev);
  }, []);

  return (
    <S.Container isActive={isActive} isClose={isActive && isClose}>
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
