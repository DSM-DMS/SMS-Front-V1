import React, { FC } from "react";
import * as S from "./styles";
import WantedMain from "./Main/WantedMain";
import InfoDetailSub from "./Sub/InfoDetailSub";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const WantedBody: FC = () => {
  const { logo_uri, field } = useSelector(
    (state: stateType) => state.poster.wanted.detail
  );
  const notices = useSelector(
    (state: stateType) => state.noticeList.announcements
  );
  return (
    <S.Container>
      <WantedMain />
      <InfoDetailSub
        imgSrc={logo_uri}
        tag={field}
        notices={notices}
        baseUrl="/circles/notice"
      />
    </S.Container>
  );
};

export default WantedBody;
