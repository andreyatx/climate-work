export type AppState = {
  isAppLoading: boolean;
  users: User[] | [];
  orders: Order[] | [];
  customers: Customer[] | [];
  teams: Team[] | [];
};

export type User = {
  firstName: string;
  lastName: string;
  middleName: string;
  role: string;
  id: string | number;
};

export type Order = {
  description: string;
  cost: number;
  startOfWork: string;
  customerId: number;
  addressId: number;
  teamId: number;
};

export type Address = {
  id: number;
  city: string;
  street: string;
  home: string | number;
  room: string | number;
};

export type Customer = {
  id: number;
  firstName: string;
  lastName: string;
  middleName: string;
  addresses: Address[];
  phone: string;
};

export type Team = {
  id: number;
  name: string;
  users: User[];
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

export type GetCustomersRequest = {
  search?: string;
  skip: number;
  take: number;
};

export type GetTeamsRequest = {
  search?: string;
  skip: number;
  take: number;
};
