import React, { FC, ReactElement, memo } from "react";

import * as S from "./style";

interface Props {
  location: string;
}

const ClubLocation: FC<Props> = ({ location }): ReactElement => {
  return (
    <S.ClubLocation>
      <label>
        <p>동아리실</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리 위치를 적어주세요."
          defaultValue={location}
          maxLength={30}
        />
      </label>
    </S.ClubLocation>
  );
};

export default memo(ClubLocation);
