import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";
import {
  GetCustomersRequest,
  GetOrdersRequest,
  GetUsersRequest,
} from "./typings";

export const getUsers = createAsyncThunk(
  "users/get",
  async (payload: GetUsersRequest) => {
    const data = await api.getAllUsers(payload);

    return data;
  }
);
export const getOrders = createAsyncThunk(
  "orders/get",
  async (payload: GetOrdersRequest) => {
    const data = await api.getAllOrders(payload);

    return data;
  }
);
export const getCustomers = createAsyncThunk(
  "customers/get",
  async (payload: GetCustomersRequest) => {
    const data = await api.getAllCustomers(payload);

    return data;
  }
);
export const appThunks = { getUsers, getOrders, getCustomers };
