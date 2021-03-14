import React, {
  KeyboardEvent,
  FC,
  useCallback,
  useState,
  ChangeEvent
} from "react";
import { RegisterInput } from "../../default";
import * as S from "../styles";
import * as registerApi from "../../../lib/api/Register";
import { getAxiosError } from "../../../lib/utils";
import { CheckCodeRes } from "../../../lib/api/payloads/Register";
import { RegisterManagement } from "../Register";

const errMsgMap = {
  404: "유효하지 않은 인증 번호입니다"
};

interface Props {
  setStudentData: (data: RegisterManagement) => void;
}

const RegisterCodeCheck: FC<Props> = ({ setStudentData }) => {
  const [checkCode, setCheckCode] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");

  const changeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 6) return;
    setCheckCode(e.target.value);
  }, []);

  const submitHandler = useCallback(async () => {
    try {
      setErrMsg("");
      if (checkCode.length < 6) {
        setErrMsg("6자리를 입력해주세요");
        return;
      }
      const res = await registerApi.checkCode(checkCode);
      setStudentData({ ...res.data, code: checkCode });
    } catch (err) {
      const { status } = getAxiosError(err);
      setErrMsg(errMsgMap[status]);
    }
  }, [checkCode, setStudentData]);

  return (
    <S.Container>
      <S.Modal>
        <S.Header>
          <S.Title>
            문자로 받은 인증번호를
            <br /> 입력해주세요
          </S.Title>
        </S.Header>
        <S.Body>
          <RegisterInput
            type="number"
            name="인증번호"
            onChange={changeHandler}
            value={checkCode}
          />
        </S.Body>
        <S.Footer>
          <S.Button onClick={submitHandler}>확인</S.Button>
          <S.ErrMsgWrap>{errMsg && <S.ErrMsg>{errMsg}</S.ErrMsg>}</S.ErrMsgWrap>
        </S.Footer>
      </S.Modal>
    </S.Container>
  );
};

export default RegisterCodeCheck;
