import React, { ChangeEvent, FC, MutableRefObject } from "react";

import * as S from "./style";

import { ErrorState } from "../../../containers/Login/LoginContainer";

interface Props {
  id: string;
  pw: string;
  autoLogin: boolean;
  errorMessage: ErrorState;
  handleId: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePw: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleAutoLogin: () => void;
  login: (id: string, pw: string, autoLogin: boolean) => Promise<any>;
  errorRef: MutableRefObject<HTMLParagraphElement>;
}

const Login: FC<Props> = ({
  id,
  pw,
  handleId,
  handlePw,
  autoLogin,
  toggleAutoLogin,
  errorMessage,
  login,
  errorRef
}) => {
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
              onChange={handleId}
              value={id}
            />
          </S.LoginLabel>
          <S.LoginLabel htmlFor="pw">
            <S.LoginInput
              type="password"
              placeholder="비밀번호"
              id="pw"
              onKeyPress={e => e.key === "Enter" && login(id, pw, autoLogin)}
              onChange={handlePw}
              value={pw}
            />
          </S.LoginLabel>
          <S.ErrorMessage ref={errorRef}>{errorMessage.message}</S.ErrorMessage>
          <S.AutoLogin>
            <S.AutoLoginCheckbox
              type="checkbox"
              id="auto-login"
              onChange={toggleAutoLogin}
            />
            <S.AutoLoginLabel htmlFor="auto-login">자동로그인</S.AutoLoginLabel>
          </S.AutoLogin>
        </S.LoginInputsWrap>
        <S.LoginButton onClick={() => login(id, pw, autoLogin)}>
          로그인
        </S.LoginButton>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default Login;
