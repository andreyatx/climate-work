import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";
import {
  GetCustomersRequest,
  GetOrdersRequest,
  GetTeamsRequest,
  GetUsersRequest,
} from "./typings";
import { EditUserData, SignInData } from "../../../api/types";

const getUsers = createAsyncThunk(
  "users/get",
  async (payload: GetUsersRequest) => {
    const data = await api.getAllUsers(payload);

    return data;
  }
);

const getOrders = createAsyncThunk(
  "orders/get",
  async (payload: GetOrdersRequest) => {
    const data = await api.getAllOrders(payload);

    return data;
  }
);

const getCustomers = createAsyncThunk(
  "customers/get",
  async (payload: GetCustomersRequest) => {
    const data = await api.getAllCustomers(payload);

    return data;
  }
);

const getTeams = createAsyncThunk(
  "teams/get",
  async (payload: GetTeamsRequest) => {
    const data = await api.getAllTeams(payload);

    return data;
  }
);

const deleteUserById = createAsyncThunk(
  "user/delete",
  async (id: number | string) => await api.deleteUser(id)
);

const editUserById = createAsyncThunk(
  "user/edit",
  async ({ id, data }: { id: string | number; data: EditUserData }) =>
    await api.editUser(id, data)
);

const signIn = createAsyncThunk(
  "auth/sign-in",
  async (payload: SignInData, { rejectWithValue }) => {
    try {
      const response = await api.signin(payload);
      localStorage.setItem("Access-Token", response.data.accessToken);
      localStorage.setItem("Refresh-Token", response.data.refreshToken);
    } catch (error: any) {
      if (!error.response) {
        throw error;
      }
      return rejectWithValue(error.response.data);
    }
  }
);

export const appThunks = {
  getUsers,
  getOrders,
  getCustomers,
  getTeams,
  deleteUserById,
  editUserById,
  signIn,
};
