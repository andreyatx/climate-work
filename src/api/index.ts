import axios from "axios";
import { API_ENDPOINTS, BASE_URL } from "./const";
import { OrderData, SignInData } from "./types";
import { GetUsersRequest } from "../store/features/app/typings";

const ACCESS_TOKEN = localStorage.getItem("Access-Token");
const AuthStr = "Bearer ".concat(ACCESS_TOKEN ? ACCESS_TOKEN : "");

const instance = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: AuthStr },
});

export const api = {
  signin: (data: SignInData) => {
    instance.post(API_ENDPOINTS.AUTH.LOG_IN, data).then((response) => {
      localStorage.setItem("Access-Token", response.data.accessToken);
      localStorage.setItem("Refresh-Token", response.data.refreshToken);
    });
  },
  getAllUsers: async (data: GetUsersRequest) => {
    const { skip, take, search } = data;
    return await instance
      .get(API_ENDPOINTS.USER.GET_ALL(skip, take, search))
      .then((res) => res.data);
  },
  orderCreate: (data: OrderData) => {
    instance.post(API_ENDPOINTS.ORDER.CREATE, data);
  },
};
