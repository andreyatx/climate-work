import { TableRow, TableCell } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Table } from "../../components/Table";
import { Order } from "../../store/features/app/typings";
import { CUSTOMER_FIELDS } from "../Customers/utils";
import { Address, Status } from "../../config/const";

export const ORDER_FIELDS: {
  [key: string]: string;
} = {
  id: "id",
  status: "Статус",
  description: "Описание",
  cost: "Стоимость",
  startOfWork: "Начало работы",
  completed: "Выполнен",
  customer: "Заказчик",
  address: "Адрес",
};

export const renderOrders = (orders: [] | Order[]) => {
  if (!orders || orders.length < 1) {
    return null;
  }
  return (
    <Table fields={ORDER_FIELDS} data={orders} title="Заказы" > {orders.map(order => {
      return <TableRow key={nanoid()}>
        <TableCell>{order.id}</TableCell>
        <TableCell>{Status[order.status as keyof typeof Status]}</TableCell>
        <TableCell>{order.description}</TableCell>
        <TableCell>{order.cost}</TableCell>
        <TableCell>{order.startOfWork}</TableCell>
        <TableCell>{order.completed ? order.completed : 'не выполнен'}</TableCell>
        <TableCell>{
          Object.entries(order.customer).map(([key, value]) => {
            return (<div key={nanoid()}>{`${CUSTOMER_FIELDS[key as keyof typeof CUSTOMER_FIELDS]}: ${value}`}</div>)
          })}
        </TableCell>
        <TableCell>{
          Object.entries(order.address).map(([key, value]) => {
            return <div key={nanoid()}> {`${Address[key as keyof typeof Address]}: ${value}`}</div>
          })}
        </TableCell>
      </TableRow>
    })}
    </Table >)
}
