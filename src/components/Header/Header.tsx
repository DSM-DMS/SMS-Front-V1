import React, { FC } from "react";

import * as S from "./style";

import { STUDENT, UserType } from "../../modules/action/header";

interface Props {
  smsUser: any;
  type: UserType;
  logout: () => void;
}

const Header: FC<Props> = ({ smsUser, type, logout }) => {
  const { grade, group, name, student_number } = smsUser;

  return (
    <S.HeaderWrap>
      {type === STUDENT ? (
        <span>{`${grade}학년 ${group}반 ${student_number}번 ${name}`}</span>
      ) : (
        <span>{`${name} 선생님`}</span>
      )}

      <S.Logout onClick={logout} to="./login">
        로그아웃
      </S.Logout>
    </S.HeaderWrap>
  );
};

export default Header;
