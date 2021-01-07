import React, { ChangeEvent, FC } from "react";

import * as S from "./style";

import { ErrorState } from "../../../containers/Login/LoginContainer";
import Loading from "../Loading/Loading";

interface Props {
  loading: boolean;
  id: string;
  pw: string;
  autoLogin: boolean;
  errorMessage: ErrorState;
  handleId: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePw: (e: ChangeEvent<HTMLInputElement>) => void;
  toggleAutoLogin: () => void;
  login: (id: string, pw: string, autoLogin: boolean) => Promise<any>;
}

const Login: FC<Props> = ({
  loading,
  id,
  pw,
  handleId,
  handlePw,
  autoLogin,
  toggleAutoLogin,
  errorMessage,
  login
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
              autoFocus={true}
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
          <S.ErrorMessage>{errorMessage.message}</S.ErrorMessage>
          {loading && <Loading />}
          <S.LoginButton onClick={() => login(id, pw, autoLogin)}>
            로그인
          </S.LoginButton>
          <S.AutoLogin>
            <S.AutoLoginLabel htmlFor="auto-login">
              <input
                type="checkbox"
                id="auto-login"
                onChange={toggleAutoLogin}
                onKeyPress={e => {
                  if (e.key === "Enter") {
                    e.currentTarget.checked = !e.currentTarget.checked;
                    toggleAutoLogin();
                  }
                }}
              />
              <S.AutoLoginCheckbox id="auto-login-checkbox" />
              <span>자동로그인</span>
            </S.AutoLoginLabel>
          </S.AutoLogin>
        </S.LoginInputsWrap>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default Login;
