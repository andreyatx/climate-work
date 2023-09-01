export const BASE_URL = "http://192.168.111.78:8000";
export const API_ENDPOINTS = {
  AUTH: {
    LOG_IN: "/api/v1/Auth/login",
  },
  USER: {
    GET_ALL: (skip: number, take: number) =>
      `/api/v1/User/?Skip=${skip}&Take=${take}`,
    GET_BY_ID: (id: number) => `/api/v1/User/${id}`,
  },
  ORDER: {
    GET_ALL: (
      skip: number,
      take: number,
      startDate?: string,
      endDate?: string,
      status?: 0 | 1 | 2 | 3
    ) =>
      `/api/v1/Order?StartDate=${startDate}&EndDate=${endDate}&Status=${status}&Skip=${skip}&Take=${take}`,
    CREATE: "/api/v1/Order",
  },
};
