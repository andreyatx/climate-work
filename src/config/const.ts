export enum Role {
  Owner = "Владелец",
  Employee = "Работник",
  Chief = "Бригадир",
}

export enum Status {
  New = "Новый",
  Assigned = "Назначен",
  Done = "Выполнен",
  Canceled = "Отменён",
}

export enum Address {
  id = "id",
  city = "Город",
  street = "Улица",
  home = "Дом",
  room = "Квартира",
}

export const DEFAULT_REQUEST = {
  skip: 0,
  take: 10,
};
