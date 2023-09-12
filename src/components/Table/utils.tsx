import { TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit";
import { TableData } from ".";
import { Address, Customer, Role, Status, User, enumList } from "../../config/const";
import { Delete, Edit } from "@mui/icons-material";

const sortObject = (data: TableData, fields: { [key: string]: string }) => {
  return data.map(obj => {
    const sortedObj: TableData | { [key: string]: string | number } = {};
    Object.keys(fields).forEach(key => {
      if (obj.hasOwnProperty(key)) {
        sortedObj[key] = (obj as { [key: string]: string | number })[key];
      }
    });

    return sortedObj;
  });
}

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

export const renderTableBody = (data: TableData, fields: { [key: string]: string }) => {
  const sortedData = sortObject(data, fields);

  return (
    <TableBody>{
      sortedData.map(row => {
        return (
          <TableRow>
            {renderTableCells(row)}
            <TableCell>
              <Edit sx={{ mr: "20px", cursor: 'pointer' }} />
              <Delete sx={{ cursor: 'pointer' }} />
            </TableCell>
          </TableRow>
        )
      })}
    </TableBody>)
}

const renderTableCell = (value: string | number | { [key: string]: string | number }, key?: string): JSX.Element | JSX.Element[] => {
  let currentEnum: typeof Address | typeof Role | typeof User | typeof Status | typeof Customer | null = null;
  let dataString = '';

  if (key === 'address') {
    currentEnum = enumList[0]
  }

  if (key === 'role') {
    currentEnum = enumList[1]
  }

  if (key === 'users') {
    currentEnum = enumList[2]
  }

  if (key === 'status') {
    currentEnum = enumList[3]
  }

  if (value === 'customer') {
    currentEnum = enumList[4]
  }

  if (key === 'completed') {
    dataString = value ? value.toString() : 'Нет'
  }

  if (currentEnum) {
    dataString = `${currentEnum[value as keyof typeof currentEnum]}`
  }

  if (!currentEnum && (typeof value === 'string' || typeof value === 'number')) {
    dataString = value.toString()
  }

  if (value && typeof value === 'object') {
    return renderTableCells(value);
  }

  return (
    <TableCell key={nanoid()}>
      <div style={{
        maxHeight: '200px', overflow: 'auto', display: 'block'
      }}>
        {dataString}
      </div>
    </TableCell>
  )
}

export const renderTableCells = (row: { [key: string]: string | number }): JSX.Element[] => {
  return Object.entries(row).map(([key, value]) => { return renderTableCell(value, key) })
}
