import React, { ChangeEvent, FC, memo, ReactElement } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubName: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { name } = useSelector((state: stateType) => state.ManagementInfo);

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleName(e.target.value);
  };

  return (
    <S.ClubName>
      <label>
        <p>동아리명</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리 명을 입력해주세요."
          defaultValue={name}
          maxLength={30}
          onChange={handleChangeName}
        />
      </label>
    </S.ClubName>
  );
};

export default memo(ClubName);
