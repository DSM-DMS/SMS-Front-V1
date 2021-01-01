import React, { FC } from "react";
import * as S from "./styles";
import InfoDetailSub from "./Sub/InfoDetailSub";
import AllMain from "./Main/AllMain";
import { useSelector } from "react-redux";
import { stateType } from "../../../../modules/reducer";

const AllBody: FC = () => {
  const { logo_uri, field } = useSelector(
    (state: stateType) => state.poster.all.detail
  );
  const notices = useSelector((state: stateType) => state.notice.list);
  return (
    <S.Container>
      <AllMain />
      <InfoDetailSub
        imgSrc={logo_uri}
        tag={field}
        notices={notices}
        baseUrl="/circles/notice"
      />
    </S.Container>
  );
};

export default AllBody;
