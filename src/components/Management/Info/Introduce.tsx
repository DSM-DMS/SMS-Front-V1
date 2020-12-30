import React, { FC, ReactElement, ChangeEvent, memo } from "react";

import * as S from "./style";

interface Props {
  introduction: string;
  handleIntroduction: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const ClubIntroduce: FC<Props> = ({
  introduction,
  handleIntroduction
}): ReactElement => {
  return (
    <S.ClubIntro>
      <label>
        <p>동아리 소개</p>
        <S.TextareaCommonStyle
          placeholder="동아리에 대해 센스있게 소개해주세요."
          rows={5}
          defaultValue={introduction}
          onChange={handleIntroduction}
        />
      </label>
    </S.ClubIntro>
  );
};

export default memo(ClubIntroduce);
