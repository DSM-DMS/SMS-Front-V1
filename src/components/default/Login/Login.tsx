import React, { FC, useState } from "react";

import * as S from "./style";

import { useSelector } from "react-redux";
import { stateType } from "../../../modules/reducer";

interface Props {}

const Login: FC<Props> = () => {
  const { type } = useSelector((state: stateType) => state.header);
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");

  const login = () => {
    if (id === "id" && pw === "pw") {
      alert("로그인 성공");
    } else {
      alert("로그인 실패");
    }
  };

  return (
    <S.LoginWrap>
      <S.LoginForm>
        <div>
          <S.LoginTitle>로그인</S.LoginTitle>
          <S.LoginSubTitle>SMS 사용을 위해 로그인 해주세요.</S.LoginSubTitle>
        </div>
        <S.LoginInputsWrap>
          <S.LoginLabel htmlFor="id">
            <S.LoginInput
              type="text"
              placeholder="아이디"
              id="id"
              onChange={e => {
                setId(e.currentTarget.value);
              }}
              value={id}
            />
          </S.LoginLabel>
          <S.LoginLabel htmlFor="pw">
            <S.LoginInput
              type="password"
              placeholder="비밀번호"
              id="pw"
              onKeyPress={e => e.key === "Enter" && login()}
              onChange={e => {
                setPw(e.currentTarget.value);
              }}
              value={pw}
            />
          </S.LoginLabel>
          <S.AutoLogin>
            <S.AutoLoginCheckbox type="checkbox" id="auto-login" />
            <S.AutoLoginLabel htmlFor="auto-login">자동로그인</S.AutoLoginLabel>
          </S.AutoLogin>
        </S.LoginInputsWrap>
        <S.LoginButton baseColor={type}>로그인</S.LoginButton>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default Login;
