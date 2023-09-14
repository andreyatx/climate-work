export type SignInData = {
  login: string;
  password: string;
};

export type OrderData = {
  [key: string]: string | number;
};

export type CustomerData = {
  [key: string]: string | number | { [key: string]: string | number }[];
};

export type TeamData = {
  [key: string]: string | number;
};

export type EditUserData = {
  [key: string]: string | number;
  firstName: string;
  lastName: string;
  middleName: string;
  role: number;
};
