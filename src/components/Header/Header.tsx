import React, { FC, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./style";

import { stateType } from "../../modules/reducer";
import {
  setGrade,
  setGroup,
  setName,
  setNumber,
  setType
} from "../../modules/action/header";

const Header: FC<{}> = () => {
  const dispatch = useDispatch();
  const { grade, group, number, name } = useSelector(
    (state: stateType) => state.header
  );

  useEffect(() => {
    dispatch(setType("student"));
    dispatch(setGrade(2));
    dispatch(setGroup(1));
    dispatch(setNumber(15));
    dispatch(setName("이성진"));
  }, []);

  return (
    <S.HeaderWrap>
      <span>{`${grade}학년 ${group}반 ${number}번 ${name}`}</span>
      <button>로그아웃</button>
    </S.HeaderWrap>
  );
};

export default Header;
