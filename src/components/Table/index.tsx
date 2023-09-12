import { Typography, TableContainer, Table as MuiTable } from "@mui/material";
import { FC } from "react";
import { Customer, Order, Team, User } from "../../store/features/app/typings";
import { renderTableHead, renderTableBody } from "./utils";

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
          {renderTableHead(fields)}
          {renderTableBody(data, fields)}
        </MuiTable>
      </TableContainer >
    </>
  );
};
