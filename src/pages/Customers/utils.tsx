import { TableRow, TableCell, Divider } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Table } from "../../components/Table"
import { Address, Role } from "../../config/const";
import { Customer } from "../../store/features/app/typings";

export const CUSTOMER_FIELDS = { id: 'id', lastName: 'Фамилия', firstName: 'Имя', middleName: 'Отчество', phone: 'Телефон', addresses: 'Адреса', };

export const renderCustomers = (customers: [] | Customer[]) => {
  if (!(customers && customers?.length)) {
    return null
  }
  return <Table title="Заказчики" fields={CUSTOMER_FIELDS} data={customers} >
    {customers.map(customer => {
      return <TableRow key={nanoid()}>
        <TableCell>{customer.id}</TableCell>
        <TableCell>{customer.lastName}</TableCell>
        <TableCell>{customer.firstName}</TableCell>
        <TableCell>{customer.middleName}</TableCell>
        <TableCell>{customer.phone}</TableCell>
        <TableCell sx={{ maxHeight: '200px' }}>
          <div style={{
            maxHeight: '200px', overflowX: 'auto', overflowY: 'auto',
          }}>
            {customer.addresses.map(address => {
              return <div >{Object.entries(address).map(([key, value]) => {
                return <div>{`${Address[key as keyof typeof Address]}: ${value}`}</div>
              })}
                <Divider /></div>
            })}
          </div>

        </TableCell>

      </TableRow>
    })}
  </Table>
}