import React, { FC, ReactElement, Dispatch, SetStateAction } from 'react';

import * as S from '../style';

interface Props {
  setFormPlace: Dispatch<SetStateAction<string>>;
}

const ApplyPlace: FC<Props> = ({ setFormPlace }): ReactElement => {
  return (
    <S.FormPlace>
      <S.ApplyFormItemTitle>장소</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap>
        <S.FormPlaceInput
          type="text"
          placeholder="외출 장소를 입력하세요"
          onChange={(e) => {
            setFormPlace(e.currentTarget.value);
          }}
        />
      </S.ApplyFormInputWrap>
    </S.FormPlace>
  );
};

export default ApplyPlace;
