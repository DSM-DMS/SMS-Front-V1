import React, {
  FC,
  ReactElement,
  Dispatch,
  SetStateAction,
  useState,
} from 'react';

import * as S from '../style';

interface Props {
  setFormReason: Dispatch<SetStateAction<string>>;
  formReasonSick: boolean;
  setFormReasonSick: Dispatch<SetStateAction<boolean>>;
}

const ApplyReason: FC<Props> = ({
  setFormReason,
  formReasonSick,
  setFormReasonSick,
}): ReactElement => {
  const [isShow, setIsShow] = useState<boolean>(false);

  return (
    <S.FormReason>
      <S.ApplyFormItemTitle>사유</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap>
        <S.FormReasonTextarea
          name="reason"
          id="reason"
          placeholder="외출사유를 입력하세요"
          rows={2}
          onChange={(e) => {
            setFormReason(e.currentTarget.value);
          }}
        />
      </S.ApplyFormInputWrap>
      <S.FormReasonSick>
        {formReasonSick ? (
          <p>
            질병 외출 신청 중 입니다.{' '}
            <span
              onClick={() => {
                setFormReasonSick(false);
              }}
            >
              취소
            </span>
          </p>
        ) : (
          <div
            onMouseEnter={() => {
              setIsShow(true);
            }}
            onMouseLeave={() => {
              setIsShow(false);
            }}
          >
            <span
              onClick={() => {
                setFormReasonSick(true);
                setIsShow(false);
              }}
            >
              질병 외출로 신청하기!
            </span>
            {isShow && (
              <S.FormReasonSickDesc>
                1. 외출 사이트 주소: sms-sms.com (예시)
                <br />
                2. 외출 신청 시간: 24시간
                <br />
                3. 외출 허용 시간: 14:20~ 20:30까지 (특별한 상황이 아닐 시, 요일
                제한 없음)
                <br />
                - 주말 외출은 기숙사 외출로 분류되므로 DSM for DMS 외출 신청
                <br />
                4. 외출 신청 방법
                <br />
                - 신청 횟수에 제한은 없으나 외출을 신청하고 외출을 나가기
                전까지는 신청에 제한이 있음
                <br />
                5. 외출 사이트를 통해서 이루어진 외출신청만 정식 외출로
                인정되며, 이외의 다른 이유로 신청한 외출은 무단외출로
                간주합니다. <br /> ({`<`}- 확정아님 그냥 이렇게 하면 좋겠음)
                <br />
                6. 외출 사이트에서는 24시간제를 사용합니다. (오후6시 외출할 경우
                -{`>`} 18시로 신청)
                <br />
              </S.FormReasonSickDesc>
            )}
          </div>
        )}
      </S.FormReasonSick>
    </S.FormReason>
  );
};

export default ApplyReason;
