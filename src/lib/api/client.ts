import axios from "axios";

export const BASE_URL = "http://10.220.158.111:8080/";
export const VERSION = "v1";

export const apiDefault = () => {
  const accessToken = localStorage.getItem("access_token");
  const expiration = localStorage.getItem("expiration");

  if (expiration) {
    if (new Date(expiration).getTime() < new Date().getTime()) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("student_uuid");
      localStorage.removeItem("expiration");

      alert("");
      window.location.replace("/login");
    }
  }

  return axios.create({
    baseURL: `${BASE_URL}${VERSION}`,
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  });
};
