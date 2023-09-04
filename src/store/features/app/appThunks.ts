import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api";
import { GetOrdersRequest, GetUsersRequest } from "./typings";

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
    const data = await api.getAllUsers(payload);

    return data;
  }
);
export const appThunks = { getUsers, getOrders };
