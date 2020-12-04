import React, { FC, ReactElement, ChangeEvent, memo } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubLocation: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { location } = useSelector((state: stateType) => state.ManagementInfo);

  const handleChangeLocation = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleLocation(e.target.value);
  };

  return (
    <S.ClubLocation>
      <label>
        <p>동아리실</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리 위치를 적어주세요."
          defaultValue={location}
          maxLength={30}
          onChange={handleChangeLocation}
        />
      </label>
    </S.ClubLocation>
  );
};

export default memo(ClubLocation);
