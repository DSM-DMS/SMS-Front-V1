import React, { FC, ReactElement } from "react";

import * as S from "./style";

interface Props {}

const ClubFacebookLink: FC<Props> = (): ReactElement => {
  return (
    <S.ClubFacebook>
      <label>
        <p>페이스북 링크</p>
        <S.ClubFacebookFakeLink>
          <span>https://www.facebook.com/</span>
          <S.InputCommonStyle type="text" />
        </S.ClubFacebookFakeLink>
      </label>
    </S.ClubFacebook>
  );
};

export default ClubFacebookLink;
