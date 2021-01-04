import React, { FC, useState, MouseEvent, useCallback } from "react";
import WantedTopHeader from "../../default/Header/WantedTopHeader/WantedTopHeader";
import * as S from "../../../styles/CircleWantedDetail";
import ManagementWantedMain from "./Main/ManagementWantedMain";
import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";

interface Props {}

const ManagementWantedDetail: FC<Props> = () => {
  const isEdit = useSelector(
    (store: stateType) => !store.management.recruit_concept
  );

  return (
    <S.Container>
      {isEdit || <WantedTopHeader />}
      <S.Hr />
      <ManagementWantedMain />
    </S.Container>
  );
};

export default ManagementWantedDetail;
