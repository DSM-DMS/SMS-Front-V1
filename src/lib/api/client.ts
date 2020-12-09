import axios from "axios";

export const SERVER = {
  hostUrl: "http://10.220.158.111:8080/",
  version: "v1",
  s3Url: "https://dms-sms-s3.s3.ap-northeast-2.amazonaws.com"
};

const SESSION_EXPIRATION_MESSAGE =
  "시간이 경과되어 세션이 만료되었습니다. 재로그인 후 다시 실행해주시기 바랍니다.";

export const BASE_URL = `${SERVER.hostUrl}${SERVER.version}`;

export const apiDefault = () => {
  const accessToken = localStorage.getItem("access_token");
  const expiration = localStorage.getItem("expiration");

  if (expiration) {
    const now = new Date().getTime(),
      expTime = new Date(expiration).getTime();

    if (expTime < now) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("student_uuid");
      localStorage.removeItem("expiration");

      alert(SESSION_EXPIRATION_MESSAGE);
      window.location.replace("/login");
    }
  }

  return axios.create({
    baseURL: `${BASE_URL}`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
