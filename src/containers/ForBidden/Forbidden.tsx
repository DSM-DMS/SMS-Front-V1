import React, { FC } from "react";
import * as S from "./styles";

const ForbiddenContainer: FC = () => {
  return (
    <S.Container>
      <div>동아리 관련 기능은 대동여지도 서비스로 이전되었습니다.</div>
      <a target="_blank" href="https://ddyzd.dsmkr.com">
        https://ddyzd.dsmkr.com
      </a>
    </S.Container>
  );
};

export default ForbiddenContainer;
