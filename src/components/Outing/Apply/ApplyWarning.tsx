import React, { FC } from "react";

import * as S from "../style";

interface Props {}

const ApplyWarning: FC<Props> = () => {
  return (
    <S.FormReasonSickDesc id="warning">
      <p>질병 외출 준수 사항</p>
      <div>
        <p>1. 외출 사이트 주소: sms-sms.com (예시)</p>
        <p>2. 외출 신청 시간: 24시간</p>
        <p>
          3. 외출 허용 시간: 14:20~ 20:30까지 (특별한 상황이 아닐 시, 요일 제한
          없음)
        </p>
        <p>- 주말 외출은 기숙사 외출로 분류되므로 DSM for DMS 외출 신청</p>
        <p>
          4. 외출 신청 방법 - 신청 횟수에 제한은 없으나 외출을 신청하고 외출을
          나가기 전까지는 신청에 제한이 있음
        </p>
        <p>
          5. 외출 사이트를 통해서 이루어진 외출신청만 정식 외출로 인정되며,
          이외의 다른 방법으로 신청한 외출은 무단외출로 간주합니다.
        </p>
        <p>
          6. 외출 사이트에서는 24시간제를 사용합니다. (오후6시 외출할 경우
          18시로 신청)
        </p>
      </div>
    </S.FormReasonSickDesc>
  );
};

export default ApplyWarning;
