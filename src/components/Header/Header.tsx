import React, { FC } from "react";

import * as S from "./style";

import useCustomSelector from "../../lib/hooks/useCustomSelector";

interface Props {
  logout: () => void;
}

const Header: FC<Props> = ({ logout }) => {
  const { grade, group, name, student_number } = useCustomSelector().header;

  if (!name) {
    return (
      <S.HeaderWrap>
        <S.Logout to="/login">로그인</S.Logout>
      </S.HeaderWrap>
    );
  }

  return (
    <S.HeaderWrap>
      <span>{`${grade}학년 ${group}반 ${student_number}번 ${name}`}</span>
      <S.MovePasswordChange to="/pw-change">비밀번호 변경</S.MovePasswordChange>
      <S.Logout to="/login" onClick={logout}>
        로그아웃
      </S.Logout>
    </S.HeaderWrap>
  );
};

export default Header;
