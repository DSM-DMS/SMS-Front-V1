import React, { FC, memo, ReactElement } from "react";

import * as S from "./style";

interface Props {
  field: string;
}

const ClubField: FC<Props> = ({ field }): ReactElement => {
  return (
    <S.ClubField>
      <div>
        <p>분야</p>
        <S.ClubFieldLabelWrap>{field}</S.ClubFieldLabelWrap>
      </div>
    </S.ClubField>
  );
};

export default memo(ClubField);
