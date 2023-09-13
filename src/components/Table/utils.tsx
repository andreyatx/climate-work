import { TableCell, TableHead, TableRow } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit";

export const renderTableHead = (fields: { [key: string]: string }) => {
  return (
    <TableHead>
      <TableRow>
        {Object.values(fields).map((field) => (
          <TableCell key={nanoid()}>{field}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
