import React, { FC } from "react";
import * as S from "./styles";
import NavigationHeader from "./header/NavigationHeader";
import NavigationBody from "./body/NavigationBody";
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
  BackgroundCircle10 as MintBackgroundCircle4
} from "../../../assets";
import { RouteData } from "../../../lib/static";
import { useCallback } from "react";
import { useHistory } from "react-router";
import { NavIconTrashCanYellow, NavIconExitBlack } from "../../../assets";
import NavigationItem from "../Item/NavigationItem";

interface Props {
  routeData: RouteData;
}

const NavigationMain: FC<Props> = ({ routeData }) => {
  const history = useHistory();
  const goMain = useCallback(() => {
    history.push("/main");
  }, []);
  return (
    <S.Container
      colorSet={routeData.color}
      isManagementMode={routeData.isManagementMode}
    >
      <NavigationHeader isManagementMode={routeData.isManagementMode} />
      <NavigationBody navItemArr={routeData.main} mainSubArr={routeData.sub} />
      <S.BackgroundImgWrap>
        {routeData.color === "#23B2AD" ? (
          <>
            <S.Circle src={MintBackgroundCircle1} top={150} left={190} />
            <S.Circle src={MintBackgroundCircle2} top={450} left={-140} />
            <S.Circle src={MintBackgroundCircle3} top={410} left={0} />
            <S.Circle src={MintBackgroundCircle4} top={410} left={-40} />
          </>
        ) : routeData.color === "#FFFFFF" ? (
          <></>
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
      {routeData.isManagementMode && (
        <S.ManagementMenu>
          <NavigationItem
            onClick={goMain}
            isActive={false}
            src={NavIconExitBlack}
            name="동아리 관리 페이지 나가기"
          />
          <NavigationItem
            onClick={() => {}}
            isActive={false}
            src={NavIconTrashCanYellow}
            name="동아리 삭제"
          />
        </S.ManagementMenu>
      )}
    </S.Container>
  );
};

export default NavigationMain;
``;
