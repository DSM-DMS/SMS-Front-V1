import React, { FC, useState, MouseEvent, useCallback } from "react";
import { FacebookIcon } from "../../../assets";
import WantedTopHeader from "../../default/Header/WantedTopHeader/WantedTopHeader";
import { FaceBookBtn } from "../../default/Info/Header/styles";
import * as S from "../../../styles/CircleWantedDetail";
import ManagementWantedMain from "./Main/ManagementWantedMain";

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
      <ManagementWantedMain />
    </S.Container>
  );
};

export default ManagementWantedDetail;
