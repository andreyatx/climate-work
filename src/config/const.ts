export enum Role {
  Owner = "Владелец",
  Employee = "Работник",
  Chief = "Бригадир",
}

export enum Address {
  id = "id",
  city = "Город",
  street = "Улица",
  home = "Дом",
  room = "Квартира",
}

export enum User {
  id = "id",
  lastName = "Фамилия",
  firstName = "Имя",
  middleName = "Отчество",
  role = "Роль",
}

export const DEFAULT_REQUEST = {
  skip: 0,
  take: 10,
};
