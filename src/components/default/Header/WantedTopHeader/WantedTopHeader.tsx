import React, { FC } from "react";
import { Toggle } from "../..";
import { Props as ToggleProps } from "../../Toggle/Toggle";
import * as S from "./styles";

interface Props {
  toggleSet: ToggleProps;
}

const WantedTopHeader: FC<Props> = ({ toggleSet }) => {
  return (
    <S.TopHeader>
      <div>
        <span>동아리 모집</span>
        <Toggle {...toggleSet} />
      </div>
      <S.PreviewButton>미리보기 화면</S.PreviewButton>
    </S.TopHeader>
  );
};

export default WantedTopHeader;
