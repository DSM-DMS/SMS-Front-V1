import React, { FC, ReactElement } from "react";

import * as S from "./style";

interface Props {}

const ClubConcept: FC<Props> = (): ReactElement => {
  return (
    <S.ClubConcept>
      <label>
        <p>동아리 컨셉</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리에 대해 간단하게 적어주세요."
          maxLength={30}
        />
      </label>
    </S.ClubConcept>
  );
};

export default ClubConcept;
