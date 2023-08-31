import axios from "axios";
import { API_ENDPOINTS, BASE_URL } from "./const";
import { SignInData } from "./types";

const ACCESS_TOKEN = localStorage.getItem("Access-Token");
const AuthStr = "Bearer ".concat(ACCESS_TOKEN ? ACCESS_TOKEN : "");

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: "Bearer " + AuthStr },
});

export const api = {
  signin: (data: SignInData) => {
    instance.post(API_ENDPOINTS.AUTH.LOG_IN, data).then((response) => {
      localStorage.setItem("Access-Token", response.data.accessToken);
      localStorage.setItem("Refresh-Token", response.data.refreshToken);
    });
  },
};
