export type AppState = {
  isAppLoading: boolean;
  users: User[] | [];
};

export type User = {
  firstName: string;
  lastName: string;
  middleName: string;
  role: string;
  id: number;
};

export type GetUsersRequest = {
  search?: string;
  skip: number;
  take: number;
};
