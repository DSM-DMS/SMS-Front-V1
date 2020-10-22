import React, { FC, ReactElement, ChangeEvent, memo } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { ManagementInfoHandler } from "../../../modules/action/management/info";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ClubFacebookLink: FC<Props> = (): ReactElement => {
  const handler = new ManagementInfoHandler();
  const { facebookLink } = useSelector(
    (state: stateType) => state.ManagementInfo
  );

  const handleChangeFacebookLink = (e: ChangeEvent<HTMLInputElement>) => {
    handler.handleFacebookLink(e.target.value);
  };

  return (
    <S.ClubFacebook>
      <label>
        <p>페이스북 링크</p>
        <S.ClubFacebookFakeLink>
          <span>https://www.facebook.com/</span>
          <S.InputCommonStyle
            type="text"
            defaultValue={facebookLink}
            maxLength={100}
            onChange={handleChangeFacebookLink}
          />
        </S.ClubFacebookFakeLink>
      </label>
    </S.ClubFacebook>
  );
};

export default memo(ClubFacebookLink);
