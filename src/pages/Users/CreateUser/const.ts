export type NewUser = {
  [key: string]: string;
  firstName: string;
  lastName: string;
  middleName: string;
  login: string;
  password: string;
};

export const userFields: NewUser = {
  lastName: "Фамилия",
  firstName: "Имя",
  middleName: "Отчество",
  login: "Логин",
  password: "Пароль",
};
