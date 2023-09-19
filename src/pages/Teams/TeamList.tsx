import { TableRow, TableCell, Button } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Table } from "../../components/Table";
import { Team } from "../../store/features/app/typings";
import { USER_FIELDS } from "../Users/UserList";
import { Role } from "../../config/const";
import { Edit, Delete } from "@mui/icons-material";
import { appActions } from "../../store/features";
import { useAppDispatch } from "../../store/hooks";

const TEAM_FIELDS = {
  id: "id",
  name: "Название",
  users: 'Пользователи'
};

export const TeamList = ({ teams }: { teams: [] | Team[] }) => {
  const dispatch = useAppDispatch();

  if (!(teams && teams?.length)) {
    return null
  }

  const editHandler = () => {
    dispatch(appActions.setIsEditing(true));
    dispatch(appActions.toggleModal());
  };

  return (
    <Table title="Команды" fields={TEAM_FIELDS} data={teams} >
      {teams.map(team => {
        return (
          <TableRow key={nanoid()}>
            <TableCell>{team.id}</TableCell>
            <TableCell>{team.name}</TableCell>
            <TableCell sx={{ maxHeight: '200px' }}>{team.users.map(user => {
              return <div key={nanoid()} style={{
                maxHeight: '200px', overflowX: 'auto', overflowY: 'auto',
              }}>{
                  Object.entries(user).map(([key, value]) => {
                    return <div>{`${USER_FIELDS[key as keyof typeof USER_FIELDS]}: ${key === 'role' ? Role[value as keyof typeof Role] : value}`}</div>
                  })
                }</div>
            })}
            </TableCell>
            <TableCell>
              <Button onClick={() => { dispatch(appActions.setCurrentTeam(team)); editHandler(); }}>
                <Edit sx={{ mr: "20px", cursor: 'pointer' }} />
              </Button>
              <Delete sx={{ cursor: 'pointer' }} />
            </TableCell>
          </TableRow>)
      })}
    </Table >)
}