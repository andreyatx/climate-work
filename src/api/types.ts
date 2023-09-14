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
