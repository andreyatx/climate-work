export type AppState = {
  isAppLoading: boolean;
  users: User[] | [];
  orders: Order[] | [];
};

export type User = {
  firstName: string;
  lastName: string;
  middleName: string;
  role: string;
  id: number;
};

export type Order = {
  description: string;
  cost: number;
  startOfWork: string;
  customerId: number;
  addressId: number;
  teamId: number;
};

export type GetUsersRequest = {
  search?: string;
  skip: number;
  take: number;
};

export type GetOrdersRequest = {
  startDate?: string;
  endDate?: string;
  status?: 0 | 1 | 2 | 3;
  skip: number;
  take: number;
};
