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

export enum Orders {
  status = "Статус",
  description = "Описание",
  cost = "Стоимость",
  startOfWork = "Начало работы",
  completed = "Выполнен",
  customer = "Заказчик",
  address = "Адрес",
  id = "id",
}

export enum Status {
  New = "Новый",
  Assigned = "Назначен",
  Done = "Выполнен",
  Canceled = "Отменён",
}

export const DEFAULT_REQUEST = {
  skip: 0,
  take: 10,
};

export const enumList = [Address, Role, User];
