import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { STUDENT } from "../../modules/action/header";
import { stateType } from "../../modules/reducer";

interface Props {
  logout: () => void;
  moveLogin: () => void;
}

const Header: FC<Props> = ({ logout, moveLogin }) => {
  const { type, grade, group, name, student_number } = useSelector(
    (state: stateType) => state.header
  );

  if (!type) {
    return (
      <S.HeaderWrap>
        <S.Logout onClick={moveLogin}>로그인</S.Logout>
      </S.HeaderWrap>
    );
  }

  return (
    <S.HeaderWrap>
      {type === STUDENT ? (
        <S.UserInfo>{`${grade}학년 ${group}반 ${student_number}번 ${name}`}</S.UserInfo>
      ) : (
        <S.UserInfo>{`${name} 선생님`}</S.UserInfo>
      )}
      <S.MovePasswordChange to="pw-change">비밀번호 변경</S.MovePasswordChange>
      <S.Logout
        onClick={() => {
          logout();
          moveLogin();
        }}
      >
        로그아웃
      </S.Logout>
    </S.HeaderWrap>
  );
};

export default Header;
