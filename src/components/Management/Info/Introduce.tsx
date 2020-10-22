import React, { FC, ReactElement, ChangeEvent, memo } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubIntroduce: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { introduce } = useSelector((state: stateType) => state.ManagementInfo);

  const handleChangeIntroduce = (e: ChangeEvent<HTMLTextAreaElement>) => {
    handler.handleIntroduce(e.target.value);
  };

  return (
    <S.ClubIntro>
      <label>
        <p>동아리 소개</p>
        <S.TextareaCommonStyle
          placeholder="동아리에 대해 센스있게 소개해주세요."
          rows={5}
          defaultValue={introduce}
          onChange={handleChangeIntroduce}
        />
      </label>
    </S.ClubIntro>
  );
};

export default memo(ClubIntroduce);
