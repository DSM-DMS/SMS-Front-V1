import React from "react";
import * as S from "../../../../../styles/CircleWantedDetail";
import ManagementWantedContentLeft from "./Left/ManagementWantedContentLeft";
import ManagementWantedContentRight from "./Right/ManagementWantedContentRight";

const ManagementWantedContent = () => {
  return (
    <S.ContentWrap>
      <ManagementWantedContentLeft />
      <ManagementWantedContentRight />
    </S.ContentWrap>
  );
};

export default ManagementWantedContent;
