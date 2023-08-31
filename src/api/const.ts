export const BASE_URL = "http://192.168.111.78:8000";
export const API_ENDPOINTS = {
  AUTH: {
    LOG_IN: "/api/v1/Auth/login",
  },
  USER: {
    GET_ALL: (skip: number, take: number) =>
      `/api/v1/Customer/?Skip=${skip}&Take=${take}`,
    GET_BY_ID: (id: number) => `/api/v1/Customer/${id}`,
  },
};
