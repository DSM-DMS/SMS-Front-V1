import React, { ChangeEvent, FC, memo, ReactElement } from "react";

import * as S from "./style";

interface Props {
  name: string;
}

const ClubName: FC<Props> = ({ name }): ReactElement => {
  return (
    <S.ClubName>
      <div>
        <p>동아리명</p>
        <S.InnerTextCommon>{name}</S.InnerTextCommon>
      </div>
    </S.ClubName>
  );
};

export default memo(ClubName);
