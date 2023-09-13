import { Typography, TableContainer, Table as MuiTable, TableBody } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Customer, Order, Team, User } from "../../store/features/app/typings";
import { renderTableHead } from "./utils";

export type TableData = User[] | Order[] | Customer[] | Team[];

type TableProps = {
  title?: string;
  fields: { [key: string]: string };
  data: TableData;
}

export const Table: FC<PropsWithChildren<TableProps>> = ({ title, fields, children }) => {

  return (
    <>
      {title && <Typography variant="h4" >{title}</Typography>}
      <TableContainer >
        <MuiTable>
          {renderTableHead(fields)}
          <TableBody>
            {children}
          </TableBody>
        </MuiTable>
      </TableContainer >
    </>
  );
};
