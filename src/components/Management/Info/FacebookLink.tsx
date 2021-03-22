import React, { FC, ReactElement, memo, ChangeEvent } from "react";

import * as S from "./style";

interface Props {
  link: string;
  handleLink: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ClubFacebookLink: FC<Props> = ({ link, handleLink }): ReactElement => {
  return (
    <S.ClubFacebook>
      <label>
        <p>페이스북 링크</p>
        <S.ClubFacebookFakeLink>
          <span>https://www.facebook.com/</span>
          <S.InputCommonStyle
            type="text"
            defaultValue={link}
            maxLength={100}
            onChange={handleLink}
          />
        </S.ClubFacebookFakeLink>
      </label>
    </S.ClubFacebook>
  );
};

export default memo(ClubFacebookLink);
