import axios, { AxiosResponse } from "axios";
import AES256 from "aes-everywhere";

import { StudentInfo } from "../../modules/type/user";
import { getAxiosError } from "../utils";
import { toast } from "react-toastify";

export const SERVER = {
  hostUrl: process.env.HOST_URL,
  version: process.env.VERSION,
  s3Url: process.env.S3_URL,
  securityBasePlain: process.env.SECURITY_BASE_PLAIN,
  securityPassPhrase: process.env.SECURITY_PASS_PHRASE
};

export const BASE_URL = `${SERVER.hostUrl}${SERVER.version}`;

export const apiDefault = () => {
  const instance = axios.create({
    baseURL: BASE_URL
  });

  instance.interceptors.request.use(config => {
    const accessToken = localStorage.getItem("access_token");
    const expiration = localStorage.getItem("expiration");

    if (expiration) {
      const now = new Date().getTime();
      const expTime = new Date(expiration).getTime();

      if (expTime < now) {
        localStorage.removeItem("access_token");
        localStorage.removeItem("uuid");
        localStorage.removeItem("expiration");

        alert(
          "자동 로그인 세션이 만료되었습니다. 재로그인 후 다시 실행해주시기 바랍니다."
        );
        window.location.replace("/login");
      }
    }
    config.headers = {
      Authorization: `Bearer ${accessToken}`,
      "Request-Security": AES256.encrypt(
        `${SERVER.securityBasePlain}:${(+new Date() + "").slice(0, 10)}`,
        SERVER.securityPassPhrase
      )
    };

    return config;
  });

  instance.interceptors.response.use(
    res => res,
    err => {
      const { status } = getAxiosError(err);

      if (status === 400) {
        toast.error("유효하지 않은 요청이 발생했습니다.");
      } else if (status === 401) {
        alert("로그인 후 이용해주세요.");
        window.location.href = "/login";
      } else if (status === 403) {
        toast.error("요청을 실행할 권한이 없습니다.");
      } else if (status === 407) {
        toast.error(
          "서버에 요류가 발생했습니다. 관리자에게 문의해주시길 바랍니다."
        );
      } else if (status === 429) {
        toast.error(
          "한 번에 너무 많은 요청이 발생했습니다. 잠시 후 다시 시도해주시길 바랍니다."
        );
      }

      return Promise.reject(err);
    }
  );

  return instance;
};

export const apiHeaderDefault = () => {
  return axios.create({
    baseURL: BASE_URL,
    headers: {
      "Request-Security": AES256.encrypt(
        `${SERVER.securityBasePlain}:${(+new Date() + "").slice(0, 10)}`,
        SERVER.securityPassPhrase
      )
    }
  });
};

export const getStudentData = (
  uuid: string
): Promise<AxiosResponse<StudentInfo>> =>
  apiDefault().get<StudentInfo>(`/students/uuid/${uuid}`);

export const getStudentDatas = (
  uuids: string[]
): Promise<AxiosResponse<StudentInfo>[]> => {
  return Promise.all<AxiosResponse<StudentInfo>>(
    uuids.map(async uuid => await getStudentData(uuid))
  );
};
