import React, { FC, ReactElement, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from '../style';
import ApplyHead from './ApplyHead';
import ApplyDate from './ApplyDate';
import ApplyTime from './ApplyTime';
import ApplyPlace from './ApplyPlace';
import ApplyReason from './ApplyReason';

interface Props {}

const Apply: FC<Props> = (): ReactElement => {
  const [formDate, setFormDate] = useState<string>('');
  const [formOutTime, setFormOutTime] = useState<string>('');
  const [formInTime, setFormInTime] = useState<string>('');
  const [formPlace, setFormPlace] = useState<string>('');
  const [formReason, setFormReason] = useState<string>('');
  const [formReasonSick, setFormReasonSick] = useState<boolean>(false);
  const [formModal, setFormModal] = useState<boolean>(false);

  // a.replace(/\n/gi, '<br />'); ->

  React.useEffect(() => {
    console.log(
      'formDate',
      formDate,
      'formOutTime',
      formOutTime,
      'formInTime',
      formInTime,
      'formPlace',
      formPlace,
      'formReason',
      formReason,
    );
  });

  return (
    <S.ApplyWarp>
      <ApplyHead />
      <div>
        <S.ApplyDescWarning>
          외출 신청 시 <Link to="/outing/waring">유의사항</Link>을 꼭 한번
          읽어주세요. 유의사항을 지키지 않아 발생한 피해는 본인의 책임입니다.
        </S.ApplyDescWarning>
        <S.ApplyForm>
          <ApplyDate formDate={formDate} setFormDate={setFormDate} />
          <ApplyTime
            formOutTime={formOutTime}
            formInTime={formInTime}
            setFormOutTime={setFormOutTime}
            setFormInTime={setFormInTime}
          />
          <ApplyPlace setFormPlace={setFormPlace} />
          <ApplyReason
            setFormReason={setFormReason}
            formReasonSick={formReasonSick}
            setFormReasonSick={setFormReasonSick}
          />
        </S.ApplyForm>
        <S.FormButtonWrap>
          <S.FormButtonCancel>취소</S.FormButtonCancel>
          <S.FormButtonSubmit
            onClick={() => {
              setFormModal(true);
            }}
          >
            작성완료
          </S.FormButtonSubmit>
        </S.FormButtonWrap>
      </div>
      {formModal && (
        <S.FormSubmitModal>
          <S.FormSubmitModalText>외출 신청하시겠습니까?</S.FormSubmitModalText>
          <div>
            <S.FormSubmitModalCancelButton
              onClick={() => {
                setFormModal(false);
              }}
            >
              취소
            </S.FormSubmitModalCancelButton>
            <S.FormSubmitModalSubmitButton
              onClick={() => {
                setFormModal(false);
              }}
            >
              확인
            </S.FormSubmitModalSubmitButton>
          </div>
        </S.FormSubmitModal>
      )}
    </S.ApplyWarp>
  );
};

export default Apply;
