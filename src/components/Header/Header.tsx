import React, { FC } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { stateType } from "../../modules/reducer";

interface Props {
  logout: () => void;
  moveLogin: () => void;
  movePasswordChange: () => void;
  moveManagement: () => void;
}

const Header: FC<Props> = ({
  logout,
  moveLogin,
  movePasswordChange,
  moveManagement
}) => {
  const { type, grade, group, name, student_number, clubUuid } = useSelector(
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
      <S.UserInfo>{`${grade}학년 ${group}반 ${student_number}번 ${name}`}</S.UserInfo>
      <S.MovePasswordChange onClick={movePasswordChange}>
        비밀번호 변경
      </S.MovePasswordChange>
      <S.Logout
        onClick={() => {
          logout();
          moveLogin();
        }}
      >
        로그아웃
      </S.Logout>
      {clubUuid && (
        <S.MoveClubManagement onClick={moveManagement}>
          동아리 관리 페이지
        </S.MoveClubManagement>
      )}
    </S.HeaderWrap>
  );
};

export default Header;
