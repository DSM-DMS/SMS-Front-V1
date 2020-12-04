import React, { ChangeEvent, FC, MouseEvent } from "react";
import { useCallback } from "react";
import { useState } from "react";
import * as S from "../../../../../../styles/CircleWantedDetail";
import CircleWantedInputHeader from "../../../../../default/Input/CircleWanted/Header/CircleWantedInputHeader";
import CircleWantedInputItem from "../../../../../default/Input/CircleWanted/Item/CircleWantedItem";
import DateInput from "../../../../../default/Input/Date/DateInput";
import LabelCheckBox from "../../../../../default/Input/LabelCheckBox/LabelCheckBox";

interface DateType {
  from: string;
  to: string;
}

interface wantedInputData {
  [key: string]: {
    grade: string;
    description: string;
    number: string;
  };
}

const ManagementWantedContentLeft: FC = () => {
  const [wantedAlways, setWantedAlways] = useState<boolean>(false);
  const [wantedData, setWantedData] = useState<wantedInputData>({});
  const [date, setDate] = useState<DateType>({
    from: "",
    to: ""
  });

  const wantedInputChangeHandler = useCallback(({ name, data }) => {
    setWantedData(prev => ({ ...prev, [name]: data }));
  }, []);

  const dateChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDate(prev => ({ ...prev, [name]: value }));
  }, []);

  const changeWantedAlways = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setWantedAlways(prev => !prev);
  }, []);

  return (
    <S.ContentLeftWrap>
      <S.MarginHeight height="15">
        <S.H2>동아리 소개</S.H2>
      </S.MarginHeight>
      <S.MarginHeight height="15">
        <S.IntroduceText>
          VCC는 임베디드 소프트웨어에 연구동아리 입니다. 주로 AVR을 통한
          마이크로프로세서 제어에 대해 공부하고, 이를 활용한 프로젝트를 함께
          진행합니다.
        </S.IntroduceText>
      </S.MarginHeight>
      <S.MarginHeight height="15">
        <S.MarginHeight height="5">
          <S.GrayTile>&gt; 모집 소개</S.GrayTile>
          <S.GrayInput
            type="text"
            placeholder="해당 모집에 대해 간략히 적어주세요"
            width="40%"
          />
        </S.MarginHeight>
        <S.MarginHeight height="5">
          <S.GrayTile>&gt; 모집 기간</S.GrayTile>
          <S.MarginHeight height="5">
            <S.Bold>날짜</S.Bold>
            <LabelCheckBox
              htmlFor="wantedAlways"
              color="#888888"
              clickHandler={changeWantedAlways}
            >
              상시 모집
            </LabelCheckBox>
            <S.DateWrap>
              <DateInput changeHandler={dateChangeHandler} name="from">
                {date.from || "날짜 선택"}
              </DateInput>
              <span>-</span>
              <DateInput changeHandler={dateChangeHandler} name="to">
                {date.to || "날짜 선택"}
              </DateInput>
            </S.DateWrap>
          </S.MarginHeight>
        </S.MarginHeight>
        <S.MarginHeight height="5">
          <S.GrayTile>&gt; 모집 대상</S.GrayTile>
          <S.InputWrap>
            <CircleWantedInputHeader />
            <CircleWantedInputItem
              name="wanted1"
              onChange={wantedInputChangeHandler}
            />
            <CircleWantedInputItem
              name="wanted2"
              onChange={wantedInputChangeHandler}
            />
            <CircleWantedInputItem
              name="wanted3"
              onChange={wantedInputChangeHandler}
            />
          </S.InputWrap>
        </S.MarginHeight>
      </S.MarginHeight>
    </S.ContentLeftWrap>
  );
};

export default ManagementWantedContentLeft;
