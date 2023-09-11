import { Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table as MuiTable } from "@mui/material";
import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Customer, Order, Team, User } from "../../store/features/app/typings";
import { renderTableRows } from "./utils";

export type TableData = User[] | Order[] | Customer[] | Team[];

type TableProps = {
  title?: string;
  fields: { [key: string]: string };
  data: TableData;
}

export const Table: FC<TableProps> = ({ title, fields, data }) => {

  return (
    <>
      {title && <Typography variant="h4" >{title}</Typography>}
      <TableContainer >
        <MuiTable>
          <TableHead>
            <TableRow>
              {Object.values(fields).map((field) => (
                <TableCell key={nanoid()}>{field}</TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>

            {renderTableRows(data, fields)}

          </TableBody>
        </MuiTable>
      </TableContainer >
    </>
  );
};
