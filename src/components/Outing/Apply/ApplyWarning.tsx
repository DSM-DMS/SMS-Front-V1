import React, { FC } from "react";

import * as S from "../style";

interface Props {}

const ApplyWarning: FC<Props> = () => {
  return (
    <S.FormReasonSickDesc id="warning">
      <p>질병 외출 준수 사항</p>
      <div>
        <p>- 질병 외출 시 신속한 외출을 위해 학부모께 승인을 받지 않습니다.</p>
        <p>- 선생님께 바로 승인을 받으세요.</p>
      </div>
    </S.FormReasonSickDesc>
  );
};

export default ApplyWarning;
