import React, { FC, ReactElement } from "react";

import * as S from "./style";

interface Props {}

const ClubField: FC<Props> = (): ReactElement => {
  return (
    <S.ClubField>
      <div>
        <p>분야</p>
        <S.ClubFieldLabelWrap>
          <S.ClubFieldLabel>
            <S.ClubFieldLabelRadio
              type="radio"
              value="SW개발"
              name="field"
              id="SW개발"
            />
            <span>SW개발</span>
          </S.ClubFieldLabel>
          <S.ClubFieldLabel>
            <S.ClubFieldLabelRadio
              type="radio"
              value="임베디드"
              name="field"
              id="임베디드"
            />
            <span>임베디드</span>
          </S.ClubFieldLabel>
          <S.ClubFieldLabel>
            <S.ClubFieldLabelRadio
              type="radio"
              value="정보보안"
              name="field"
              id="정보보안"
            />
            <span>정보보안</span>
          </S.ClubFieldLabel>
        </S.ClubFieldLabelWrap>
      </div>
    </S.ClubField>
  );
};

export default ClubField;
