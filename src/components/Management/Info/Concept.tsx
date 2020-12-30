import React, { FC, ReactElement, memo, ChangeEvent } from "react";

import * as S from "./style";

interface Props {
  clubConcept: string;
  handleConcept: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClubConcept: FC<Props> = ({
  clubConcept,
  handleConcept
}): ReactElement => {
  return (
    <S.ClubConcept>
      <label>
        <p>동아리 컨셉</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리에 대해 간단하게 적어주세요."
          maxLength={30}
          defaultValue={clubConcept}
          onChange={handleConcept}
        />
      </label>
    </S.ClubConcept>
  );
};

export default memo(ClubConcept);
