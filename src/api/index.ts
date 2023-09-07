import axios from "axios";
import { API_ENDPOINTS, BASE_URL } from "./const";
import { OrderData, SignInData } from "./types";
import {
  GetCustomersRequest,
  GetOrdersRequest,
  GetTeamsRequest,
  GetUsersRequest,
} from "../store/features/app/typings";
import { NewUser } from "../pages/Users/CreateUser";

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
  getAllOrders: async (data: GetOrdersRequest) => {
    const { skip, take, startDate, endDate, status } = data;
    return await instance
      .get(API_ENDPOINTS.ORDER.GET_ALL(skip, take, startDate, endDate, status))
      .then((res) => res.data);
  },
  getAllCustomers: async (data: GetCustomersRequest) => {
    const { skip, take, search } = data;
    return await instance
      .get(API_ENDPOINTS.CUSTOMER.GET_ALL(skip, take, search))
      .then((res) => res.data);
  },
  getAllTeams: async (data: GetTeamsRequest) => {
    const { skip, take, search } = data;
    return await instance
      .get(API_ENDPOINTS.TEAM.GET_ALL(skip, take, search))
      .then((res) => res.data);
  },
  createUser: (data: NewUser) => {
    instance.post(API_ENDPOINTS.USER.CREATE, data);
  },
  orderCreate: (data: OrderData) => {
    instance.post(API_ENDPOINTS.ORDER.CREATE, data);
  },
};
