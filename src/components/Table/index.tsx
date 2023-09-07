import { Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table as MuiTable } from "@mui/material";
import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Role } from "../../config/const";
import { Customer, Order, Team, User } from "../../store/features/app/typings";

type TableProps = {
  title?: string;
  fields: { [key: string]: string };
  data: User[] | Order[] | Customer[] | Team[];
}

export const Table: FC<TableProps> = ({ title, fields, data }) => {

  const sortedData = data.map(obj => {
    const sortedObj: {
      [key: string]: string | number;
    } = {};
    Object.keys(fields).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        sortedObj[key] = (obj as { [key: string]: string | number })[key];
      }
    });
    return sortedObj;
  });

  return (
    <>
      {title && <Typography variant="h4" >{title}</Typography>}
      <TableContainer>
        <MuiTable>
          <TableHead>
            <TableRow>
              {Object.values(fields).map((field) => (
                <TableCell key={nanoid()}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {sortedData.map((item) => (
              <TableRow
                key={nanoid()}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {Object.entries(item).map(([key, value]) => {

                  if (key === 'role') {
                    return <TableCell key={nanoid()}>{Role[value as keyof typeof Role]}</TableCell>
                  }

                  if (typeof value === 'object' && Array.isArray(value)) {
                    return (value as string[]).map(item => {
                      console.log(item);
                      return Object.entries(item).map(([key, value]) => {
                        return <TableCell key={nanoid()}>{value}</TableCell>
                      })

                    })

                  }

                  return <TableCell key={nanoid()}>{`${value}`}</TableCell>
                })}

              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};
