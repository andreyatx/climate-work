import axios from "axios";
import { API_ENDPOINTS, BASE_URL } from "./const";
import {
  CustomerData,
  EditUserData,
  OrderData,
  SignInData,
  TeamData,
} from "./types";
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

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error("Status:", error.response.status);
      console.error("Data:", error.response.data);
      console.error("Headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error:", error.message);
    }

    // Throw the error to the promise chain
    return Promise.reject(error);
  }
);

export const api = {
  signin: (data: SignInData) => {
    return instance.post<{ accessToken: string; refreshToken: string }>(
      API_ENDPOINTS.AUTH.LOG_IN,
      data
    );
  },
  getAllUsers: async (data: GetUsersRequest) => {
    const { skip, take, search } = data;
    return await instance
      .get(API_ENDPOINTS.USER.GET_ALL(skip, take, search))
      .then((res) => res.data);
  },
  getAllOrders: async (data: GetOrdersRequest) => {
    const { skip, take, status, startDate, endDate } = data;
    return await instance
      .get(API_ENDPOINTS.ORDER.GET_ALL(skip, take, status, startDate, endDate))
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
  getUserById: (id: number) => {
    instance.get(API_ENDPOINTS.USER.GET_BY_ID(id));
  },
  getTeamById: (id: number) => {
    return instance.get(API_ENDPOINTS.TEAM.GET_BY_ID(id));
  },
  createUser: (data: NewUser) => {
    instance.post(API_ENDPOINTS.USER.CREATE, data);
  },
  createOrder: (data: OrderData) => {
    instance.post(API_ENDPOINTS.ORDER.CREATE, data);
  },
  createCustomer: (data: CustomerData) => {
    instance.post(API_ENDPOINTS.CUSTOMER.CREATE, data);
  },
  createTeam: (data: TeamData) => {
    instance.post(API_ENDPOINTS.TEAM.CREATE, data);
  },
  deleteUser: (id: number | string) => {
    instance.delete(API_ENDPOINTS.USER.GET_BY_ID(id));
  },
  editUser: (id: number | string, data: EditUserData) => {
    instance.patch(API_ENDPOINTS.USER.GET_BY_ID(id), data);
  },
};
