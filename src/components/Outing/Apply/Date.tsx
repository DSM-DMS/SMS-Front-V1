import React, {
  FC,
  ReactElement,
  SyntheticEvent,
  Dispatch,
  SetStateAction,
} from 'react';

import * as S from '../style';

interface Props {
  formDate: string;
  setFormDate: Dispatch<SetStateAction<string>>;
}

const ApplyDate: FC<Props> = ({ setFormDate, formDate }): ReactElement => {
  const onInputDate = (e: SyntheticEvent<HTMLInputElement>) => {
    const selected: Date = new Date(e.currentTarget.value);
    const y = selected.getFullYear();
    const m = selected.getMonth() + 1;
    const fixedM = m < 10 ? `0${m}` : `${m}`;
    const d = selected.getDate();
    setFormDate(`${y}년 ${fixedM}월 ${d}일`);
  };

  return (
    <S.FormDate>
      <S.ApplyFormItemTitle>날짜</S.ApplyFormItemTitle>
      <S.ApplyFormInputWrap className="dateWrap">
        <S.FormDateText className={formDate ? 'selected' : ''}>
          {formDate ? formDate : '외출 날짜를 선택하세요.'}
        </S.FormDateText>
        <S.FormDateInput
          type="date"
          min={(() => {
            const date: Date = new Date();
            const y = date.getFullYear();
            const m = date.getMonth() + 1;
            const d = date.getDate();
            return `${y}-${m < 10 ? `0${m}` : m}-${d}`;
          })()}
          onInput={onInputDate}
        />
      </S.ApplyFormInputWrap>
    </S.FormDate>
  );
};

export default ApplyDate;
