import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { RegisterManagement } from "../../../lib/api/payloads/Register";
import { RegisterManagement as AllRegisterManagement } from "../Register";
import { RegisterInput } from "../../default";
import * as S from "../styles";
import * as registerApi from "../../../lib/api/Register";
import { getAxiosError, makePhoneNum } from "../../../lib/utils";
import { toast } from "react-toastify";
import { useHistory } from "react-router";

interface Props extends AllRegisterManagement {}

const errMsgMap = {
  409: "사용중인 아이디입니다"
};

const RegisterForm: FC<Props> = ({
  grade,
  group,
  name,
  student_number,
  phone_number,
  code
}) => {
  const history = useHistory();
  const [registerData, setRegisterData] = useState<RegisterManagement>({
    id: "",
    password: ""
  });
  const [errMsg, setErrMsg] = useState<string>("");

  const changeData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData(prev => ({ ...prev, [name]: value }));
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      setErrMsg("");
      const idLength: number = registerData.id.length;
      const passwordLength: number = registerData.password.length;
      if (idLength < 4 || idLength > 16) {
        setErrMsg("아이디 길이를 확인해주세요");
        return;
      }
      if (passwordLength < 4 || passwordLength > 16) {
        setErrMsg("비밀번호 길이를 확인해주세요");
        return;
      }

      await registerApi.makeAccount({ ...registerData, code });
      toast.success("계정이 생성되었습니다");
      history.push("/login");
    } catch (err) {
      const { status } = getAxiosError(err);
      setErrMsg(errMsgMap[status]);
    }
  }, [registerData, code]);
  return (
    <S.Container>
      <S.Modal>
        <S.Header>
          <S.Title>작성 후 계정을 생성해주세요</S.Title>
        </S.Header>
        <S.Body>
          <S.TwiceInputWrap>
            <RegisterInput
              readOnly={true}
              type="text"
              value={`${grade}${group}${`${student_number}`.padStart(2, "0")}`}
              name="학번"
            />
            <RegisterInput
              readOnly={true}
              type="text"
              value={name}
              name="이름"
            />
          </S.TwiceInputWrap>
          <RegisterInput
            readOnly={true}
            type="text"
            value={makePhoneNum(phone_number)}
            name="전화번호"
          />
          <RegisterInput
            type="text"
            value={registerData.id}
            inputName="id"
            name="아이디"
            onChange={changeData}
            placeHolder="4~16자 사이의 아이디를 입력해주세요"
          />
          <RegisterInput
            type="password"
            inputName="password"
            value={registerData.password}
            placeHolder="4~16자 사이의 비밀번호를 입력해주세요"
            name="비밀번호"
            onChange={changeData}
          />
        </S.Body>
        <S.Footer>
          <S.Button onClick={submitHandler}>계정 생성</S.Button>
          <S.ErrMsgWrap>{errMsg && <S.ErrMsg>{errMsg}</S.ErrMsg>}</S.ErrMsgWrap>
        </S.Footer>
      </S.Modal>
    </S.Container>
  );
};

export default RegisterForm;
