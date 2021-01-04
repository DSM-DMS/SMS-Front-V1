import React, { FC } from "react";
import { useSelector } from "react-redux";
import { FacebookIcon } from "../../../../assets";
import { stateType } from "../../../../modules/reducer";
import * as S from "../../../../styles/CircleWantedDetail";
import { FaceBookBtn } from "../../../default/Info/Header/styles";
import ManagementWantedContent from "./Content/ManagementWantedContent";

const ManagementWantedMain: FC = () => {
  const { name, link } = useSelector((store: stateType) => store.management);
  return (
    <S.Main>
      <S.Header>
        <S.CircleName>{name}</S.CircleName>
        <FaceBookBtn href={link}>
          <img src={FacebookIcon} />
          지원하기
        </FaceBookBtn>
      </S.Header>
      <ManagementWantedContent />
    </S.Main>
  );
};

export default ManagementWantedMain;
