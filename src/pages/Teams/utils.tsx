import { TableRow, TableCell } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { Table } from "../../components/Table";
import { Team } from "../../store/features/app/typings";
import { USER_FIELDS } from "../Users/utils";
import { Role } from "../../config/const";

const TEAM_FIELDS = {
  id: "id",
  name: "Название",
  users: 'Пользователи'
};

export const renderTeams = (teams: [] | Team[]) => {
  if (!(teams && teams?.length)) {
    return null
  }

  return (
    <Table title="Команды" fields={TEAM_FIELDS} data={teams} >
      {teams.map(team => {
        return (
          <TableRow key={nanoid()}>
            <TableCell>{team.id}</TableCell>
            <TableCell>{team.name}</TableCell>
            <TableCell>{team.users.map(user => {
              return <div key={nanoid()}>{
                Object.entries(user).map(([key, value]) => {
                  return <div>{`${USER_FIELDS[key as keyof typeof USER_FIELDS]}: ${key === 'role' ? Role[value as keyof typeof Role] : value}`}</div>
                })
              }</div>
            })}
            </TableCell>
          </TableRow>)
      })}
    </Table>)
}