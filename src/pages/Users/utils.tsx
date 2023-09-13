import { TableRow, TableCell } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit"
import { User } from "../../store/features/app/typings"
import { Table } from "../../components/Table";
import { Role } from "../../config/const";

export const USER_FIELDS = { id: 'id', lastName: 'Фамилия', firstName: 'Имя', middleName: 'Отчество', role: 'Роль' };

export const renderUsers = (users: [] | User[]) => {
  if (!(users && users?.length)) {
    return null
  }

  return (<Table title="Пользователи" fields={USER_FIELDS} data={users} >
    {users.map(user => {
      return <TableRow key={nanoid()}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.middleName}</TableCell>
        <TableCell>{Role[user.role as keyof typeof Role]}</TableCell>
      </TableRow>
    })}
  </Table>)
}