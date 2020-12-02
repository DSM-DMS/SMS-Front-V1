import React, { FC, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import * as S from "./style";

import { stateType } from "../../../modules/reducer";
import { postLoginStudent } from "../../../lib/api";

interface Props {}

const Login: FC<Props> = () => {
  const { type } = useSelector((state: stateType) => state.header);
  const [id, setId] = useState<string>("");
  const [pw, setPw] = useState<string>("");
  const [autoLogin, setAutoLogin] = useState<boolean>(false);

  const login = useCallback(async (id, pw) => {
    const filtering = (str: string) => str.length >= 4 && str.length <= 16;

    if (filtering(id) && filtering(pw)) {
      try {
        const {
          data: { access_token, student_uuid }
        } = await postLoginStudent(id, pw);

        localStorage.setItem("access_token", access_token);
        localStorage.setItem("student_uuid", student_uuid);

        if (autoLogin) {
          localStorage.setItem("expiration", `${new Date().getTime()}`);
        }
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

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
              onChange={(e) => {
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
              onKeyPress={(e) => e.key === "Enter" && login(id, pw)}
              onChange={(e) => {
                setPw(e.currentTarget.value);
              }}
              value={pw}
            />
          </S.LoginLabel>
          <S.AutoLogin>
            <S.AutoLoginCheckbox
              type="checkbox"
              id="auto-login"
              onChange={() => setAutoLogin((prev) => !prev)}
            />
            <S.AutoLoginLabel htmlFor="auto-login">자동로그인</S.AutoLoginLabel>
          </S.AutoLogin>
        </S.LoginInputsWrap>
        <S.LoginButton baseColor={type} onClick={() => login(id, pw)}>
          로그인
        </S.LoginButton>
      </S.LoginForm>
    </S.LoginWrap>
  );
};

export default Login;
