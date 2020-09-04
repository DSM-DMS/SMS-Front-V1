import React, {
  FC,
  ReactElement,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

import * as S from '../style';

import { OutingDown } from '../../../assets';

interface Props {
  formOutTime: string;
  formInTime: string;
  setFormOutTime: Dispatch<SetStateAction<string>>;
  setFormInTime: Dispatch<SetStateAction<string>>;
}

const fixNumToTime = (num: number): string =>
  num < 10 ? `0${num}:00` : `${num}:00`;
const times = (() => {
  const buffer = [];
  for (let i = 1; i <= 24; i++) {
    buffer.push(fixNumToTime(i));
  }
  return buffer;
})();

const ApplyTime: FC<Props> = ({
  formOutTime,
  formInTime,
  setFormOutTime,
  setFormInTime,
}): ReactElement => {
  const [showOut, setShowOut] = useState<boolean>(false);
  const [showIn, setShowIn] = useState<boolean>(false);

  const timeList = (
    setFormFunc: Dispatch<SetStateAction<string>>,
    setShowFunc: Dispatch<SetStateAction<boolean>>,
  ) => {
    return (
      <S.FormTimeList>
        {times.map((time) => (
          <S.FormTimeItem
            key={time}
            onClick={() => {
              if (formOutTime === '') {
                if (formInTime === '') {
                  setFormFunc(time);
                  setShowFunc(false);
                  return;
                }
                if (formInTime <= time) return;
                setFormFunc(time);
                setShowFunc(false);
                return;
              }
              if (formInTime === '') {
                if (formOutTime >= time) return;
                setFormFunc(time);
                setShowFunc(false);
                return;
              }
              if (time >= formInTime) return;
              setFormFunc(time);
              setShowFunc(false);
            }}
          >
            {time}
          </S.FormTimeItem>
        ))}
      </S.FormTimeList>
    );
  };

  return (
    <S.FormTime>
      <S.ApplyFormItemTitle>외출 시간</S.ApplyFormItemTitle>
      <S.FormTimeListWrap>
        <S.ApplyFormInputWrap className="timeWrap">
          <S.FormTimeType className={formOutTime ? 'selected' : ''}>
            {formOutTime
              ? formOutTime >= '12:00'
                ? `오후 ${formOutTime}`
                : `오전 ${formOutTime}`
              : '외출 시간을 선택하세요.'}
          </S.FormTimeType>
          <S.FormTimeListImg
            src={OutingDown}
            onClick={() => {
              setShowIn(false);
              setShowOut((prev) => !prev);
            }}
          />
          {showOut && timeList(setFormOutTime, setShowOut)}
        </S.ApplyFormInputWrap>
        <S.ApplyFormInputWrap className="timeWrap">
          <S.FormTimeType className={formInTime ? 'selected' : ''}>
            {formInTime
              ? formInTime >= '12:00'
                ? `오후 ${formInTime}`
                : `오전 ${formInTime}`
              : '귀교 시간을 선택하세요.'}
          </S.FormTimeType>
          <S.FormTimeListImg
            src={OutingDown}
            onClick={() => {
              setShowOut(false);
              setShowIn((prev) => !prev);
            }}
          />
          {showIn && timeList(setFormInTime, setShowIn)}
        </S.ApplyFormInputWrap>
      </S.FormTimeListWrap>
    </S.FormTime>
  );
};

export default ApplyTime;
