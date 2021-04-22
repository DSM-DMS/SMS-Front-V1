import React, { FC } from "react";
import { Link } from "react-router-dom";

import * as S from "./style";

import Loading from "../Loading/Loading";
import { Eye, EyeOff } from "../../../assets";
import useLogin from "../../../lib/hooks/useLogin";

interface Props {}

const Login: FC<Props> = () => {
  const [
    showPw,
    errorMessage,
    loading,
    handleId,
    handlePw,
    toggleEye,
    toggleAutoLogin,
    login
  ] = useLogin();

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
              autoFocus={true}
            />
          </S.LoginLabel>
          <S.LoginLabel htmlFor="current-password">
            <S.LoginInput
              type={showPw ? "text" : "password"}
              placeholder="비밀번호"
              id="current-password"
              onChange={handlePw}
            />
            <S.Eye
              src={showPw ? Eye : EyeOff}
              alt="toggle password"
              title="toggle password"
              onClick={toggleEye}
            />
          </S.LoginLabel>
          <S.ErrorMessage>{errorMessage.message}</S.ErrorMessage>
          {loading && <Loading />}
          <S.LoginButton
            onClick={e => {
              e.preventDefault();
              login();
            }}
          >
            로그인
          </S.LoginButton>
          <S.AutoLogin>
            <S.AutoLoginLabel htmlFor="auto-login" onChange={toggleAutoLogin}>
              <input type="checkbox" id="auto-login" defaultChecked={true} />
              <S.AutoLoginCheckbox id="auto-login-checkbox" />
              <span>자동로그인</span>
            </S.AutoLoginLabel>
            <Link to="/register">아직 계정이 없으신가요?</Link>
          </S.AutoLogin>
        </S.LoginInputsWrap>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default Login;
