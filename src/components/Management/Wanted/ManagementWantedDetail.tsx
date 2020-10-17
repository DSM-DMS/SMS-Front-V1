import React, { FC, useState, MouseEvent, useCallback } from "react";
import WantedTopHeader from "../../default/Header/WantedTopHeader/WantedTopHeader";
import * as S from "./styles";

interface Props {}

const toggleSetting = {
  actvieSet: {
    text: "켜기",
    backgroundColor: "#242424",
    color: "white"
  },
  defaultSet: {
    text: "끄기",
    backgroundColor: "#DDDDDD",
    color: "#242424"
  },
  circleColor: "white"
};

const ManagementWantedDetail: FC<Props> = () => {
  const [toggleIsActive, setToggleIsActive] = useState<boolean>(false);
  const toggleHandler = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    setToggleIsActive(prev => !prev);
  }, []);

  return (
    <S.Container>
      <WantedTopHeader
        toggleSet={{
          ...toggleSetting,
          clickHandler: toggleHandler,
          isActive: toggleIsActive
        }}
      />
      <S.Hr />
      <S.Main></S.Main>
    </S.Container>
  );
};

export default ManagementWantedDetail;
