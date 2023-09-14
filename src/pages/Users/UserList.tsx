
import { TableRow, TableCell, Button } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Table } from "../../components/Table";
import { DEFAULT_REQUEST, Role } from "../../config/const";
import { Edit, Delete } from "@mui/icons-material";
import { FC } from "react";
import { useAppDispatch } from "../../store/hooks";
import { appThunks } from "../../store/features/app/appThunks";
import { appActions } from "../../store/features";

import { User } from "../../store/features/app/typings"

export type UserListProps = {
  users: [] | User[]
}

export const USER_FIELDS = { id: 'id', lastName: 'Фамилия', firstName: 'Имя', middleName: 'Отчество', role: 'Роль' };

export const UserList: FC<UserListProps> = ({ users }) => {
  const dispatch = useAppDispatch();
  const deleteHandler = (id: number | string) => {
    dispatch(appThunks.deleteUserById(id));
    dispatch(appThunks.getUsers(DEFAULT_REQUEST));
  };

  const editHandler = () => {
    dispatch(appActions.setIsEditing(true));
    dispatch(appActions.toggleModal());

  };

  if (!(users && users?.length)) {
    return null;
  }


  return (<Table title="Пользователи" fields={USER_FIELDS} data={users}>
    {users.map(user => {
      return <TableRow key={nanoid()}>
        <TableCell>{user.id}</TableCell>
        <TableCell>{user.lastName}</TableCell>
        <TableCell>{user.firstName}</TableCell>
        <TableCell>{user.middleName}</TableCell>
        <TableCell>{Role[user.role as keyof typeof Role]}</TableCell>
        <TableCell>
          <Button onClick={() => { dispatch(appActions.setCurrentUser(user)); editHandler(); }}>
            <Edit sx={{ mr: "20px", cursor: 'pointer' }} />
          </Button>
          <Button onClick={() => deleteHandler(user.id)}>
            <Delete sx={{ cursor: 'pointer' }} />
          </Button>
        </TableCell>
      </TableRow>;
    })}

  </Table>);
};
