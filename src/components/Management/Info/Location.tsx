import React, { FC, ReactElement, memo } from "react";

import * as S from "./style";

interface Props {
  location: string;
}

const ClubLocation: FC<Props> = ({ location }): ReactElement => {
  return (
    <S.ClubLocation>
      <div>
        <p>동아리실</p>
        <S.InnerTextCommon>{location}</S.InnerTextCommon>
      </div>
    </S.ClubLocation>
  );
};

export default memo(ClubLocation);
