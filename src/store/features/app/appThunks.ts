import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";
import {
  GetCustomersRequest,
  GetOrdersRequest,
  GetTeamsRequest,
  GetUsersRequest,
} from "./typings";
import { EditUserData } from "../../../api/types";

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
export const appThunks = {
  getUsers,
  getOrders,
  getCustomers,
  getTeams,
  deleteUserById,
  editUserById,
};
