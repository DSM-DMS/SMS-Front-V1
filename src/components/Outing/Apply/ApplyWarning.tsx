import React, { FC } from "react";

import * as S from "../style";

interface Props {}

const ApplyWarning: FC<Props> = () => {
  return (
    <S.FormReasonSickDesc id="warning">
      <p>질병 외출 준수 사항</p>
      <div>
        <p>- 질병 상황 외에 질병 외출 신청 시 불이익을 받을 수 있습니다.</p>
        <p>- 부모님께 승인 요청이 아닌 일방적인 통지 문자가 전송됩니다.</p>
      </div>
    </S.FormReasonSickDesc>
  );
};

export default ApplyWarning;
