import React, { FC, ReactElement, ChangeEvent, memo } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubConcept: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { concept } = useSelector((state: stateType) => state.ManagementInfo);

  const handleChangeConcept = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleConcept(e.target.value);
  };

  return (
    <S.ClubConcept>
      <label>
        <p>동아리 컨셉</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리에 대해 간단하게 적어주세요."
          maxLength={30}
          defaultValue={concept}
          onChange={handleChangeConcept}
        />
      </label>
    </S.ClubConcept>
  );
};

export default memo(ClubConcept);
