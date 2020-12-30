import React, { ChangeEvent, FC, memo, ReactElement } from "react";

import * as S from "./style";

interface Props {
  name: string;
  handleName: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClubName: FC<Props> = ({ name, handleName }): ReactElement => {
  return (
    <S.ClubName>
      <label>
        <p>동아리명</p>
        <S.InputCommonStyle
          type="text"
          placeholder="동아리 명을 입력해주세요."
          defaultValue={name}
          maxLength={30}
          onChange={handleName}
        />
      </label>
    </S.ClubName>
  );
};

export default memo(ClubName);
