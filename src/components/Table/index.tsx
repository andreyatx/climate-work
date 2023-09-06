import { Typography, TableContainer, TableHead, TableRow, TableCell, TableBody, Table as MuiTable } from "@mui/material";
import { FC } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { Role } from "../../config/const";

type TableProps = {
  title?: string;
  fields: { [key: string]: string };
  data: { [key: string]: string | number }[];
}

export const Table: FC<TableProps> = ({ title, fields, data }) => {

  const sortedData = data.map(obj => {
    const sortedObj: {
      [key: string]: string | number;
    } = {};
    Object.keys(fields).forEach(key => {
      sortedObj[key] = obj[key];
    });
    return sortedObj;
  });

  return (
    <>
      {title && <Typography variant="h4" sx={{ mt: '12px' }}>{title}</Typography>}
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
            {sortedData &&
              sortedData?.length &&
              sortedData.map((item) => (
                <TableRow
                  key={nanoid()}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  {Object.entries(item).map(([key, value]) => {

                    if (key === 'role') {
                      return <TableCell key={nanoid()}>{Role[value as keyof typeof Role]}</TableCell>
                    }

                    return <TableCell key={nanoid()}>{value}</TableCell>
                  })}

                </TableRow>
              ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </>
  );
};
