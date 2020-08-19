import React, {
  FC,
  useState,
  useCallback,
  MouseEvent,
  useEffect,
  useRef,
} from 'react';
import * as S from './styles';
import NavigationSubHeader from './Header/NavigationSubHeader';
import NavigationSubBody from './Body/NavigationSubBody';
import { CloseMenu } from '../../../assets';
import { useSelector } from 'react-redux';
import { stateType } from '../../../modules/reducer';
import CloseNavigatin from './Close/CloseNavigation';

function Sleep(delaySecond: number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, delaySecond * 1000);
  });
}

const NavigationSub: FC<{}> = () => {
  const [isClose, setIsClose] = useState<boolean>(false);
  const mainUrl = useSelector((store: stateType) => store.page.mainUrl);
  const isActive = mainUrl === '동아리' || mainUrl === '외출신청';
  const ref = useRef<HTMLDivElement>();

  const changeIsClose = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setIsClose((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isClose || !isActive) {
      ref.current.style.minWidth = 'unset';
      return;
    }
    Sleep(0.25).then(() => {
      ref.current.style.minWidth = '220px';
      return;
    });
  }, [isClose, isActive]);

  return (
    <S.Container isActive={isActive} isClose={isActive && isClose} ref={ref}>
      {!isClose && isActive && (
        <>
          <NavigationSubHeader>{mainUrl}</NavigationSubHeader>
          <NavigationSubBody page={mainUrl} />
        </>
      )}

      {isClose && isActive && <CloseNavigatin />}

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
