export const BASE_URL = "http://192.168.111.78:8000/api/v1";
export const API_ENDPOINTS = {
  AUTH: {
    LOG_IN: "/api/v1/Auth/login",
  },
  USER: {
    GET_ALL: (skip: number, take: number, search?: string) =>
      `/User/${search ? `?Search=${search}` : "?"}Skip=${skip}&Take=${take}`,
    GET_BY_ID: (id: number) => `/api/v1/User/${id}`,
    CREATE: `/User`,
  },
  ORDER: {
    GET_ALL: (
      skip: number,
      take: number,
      startDate?: string,
      endDate?: string,
      status?: 0 | 1 | 2 | 3
    ) => {
      const queryParams = [];

      queryParams.push(
        startDate !== undefined ? `StartDate=${startDate}` : null
      );
      queryParams.push(endDate !== undefined ? `EndDate=${endDate}` : null);
      queryParams.push(status !== undefined ? `Status=${status}` : `Status=1`);
      queryParams.push(skip !== undefined ? `Skip=${skip}` : null);
      queryParams.push(take !== undefined ? `Take=${take}` : null);

      const queryString = queryParams
        .filter((param) => param !== null)
        .join("&");

      return "/Order" + (queryString ? `?${queryString}` : "");
    },
    CREATE: "/Order",
  },
  CUSTOMER: {
    GET_ALL: (skip: number, take: number, search?: string) =>
      `/Customer/${
        search ? `?Search=${search}` : "?"
      }Skip=${skip}&Take=${take}`,
  },
  TEAM: {
    GET_ALL: (skip: number, take: number, search?: string) =>
      `/Teams/${search ? `?Search=${search}` : "?"}Skip=${skip}&Take=${take}`,
  },
};
