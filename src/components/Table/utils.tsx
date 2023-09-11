import { Divider, TableCell, TableRow } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit";
import { TableData } from ".";
import { Address, Role, User } from "../../config/const";

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

export const renderTableRows = (data: TableData, fields: { [key: string]: string }) => {
  const sortedData = sortObject(data, fields);

  return sortedData.map(row => {
    return <TableRow>{renderTableCells(row)}</TableRow>
  })

}

export const renderTableCells = (row: { [key: string]: string | number }) => {
  const enumList = [Address, Role, User];

  let currentEnum: typeof Address | typeof Role | typeof User | null = null;


  return Object.entries(row).map(([key, value]) => {
    if (key === 'role') {
      currentEnum = enumList[1]
    }


    if (typeof value === 'object' && Array.isArray(value)) {

      if (key === 'users') {
        console.log('heh', key);

        return <TableCell key={nanoid()}>
          <div style={{
            maxHeight: '200px', overflowX: 'auto', overflowY: 'auto',
          }}>
            {(value as string[]).map(item => {

              return (
                <div>
                  {Object.entries(item).map(([key, value]) => {
                    currentEnum = enumList[2];
                    return <div>{`${currentEnum[key as keyof typeof currentEnum]}: ${value}`}</div>
                  })}
                  <Divider sx={{ mb: '10px' }} />
                </div>
              )
            })}
          </div>
        </TableCell>
      }

      return <TableCell key={nanoid()}>
        <div style={{
          maxHeight: '200px', overflowX: 'auto', overflowY: 'auto',
        }}>
          {(value as string[]).map(item => {

            return (
              <div>
                {Object.entries(item).map(([key, value]) => {
                  currentEnum = enumList[0];
                  return <div>{`${currentEnum[key as keyof typeof currentEnum]}: ${value}`}</div>
                })}
                <Divider sx={{ mb: '10px' }} />
              </div>
            )
          })}
        </div>
      </TableCell>
    }

    if (currentEnum) {
      return (
        <TableCell key={nanoid()}>
          <div style={{
            maxHeight: '200px', overflow: 'auto'
          }}>{`${currentEnum[value as keyof typeof currentEnum]}`}
          </div>
        </TableCell>
      )
    }
    return (
      <TableCell key={nanoid()}>
        <div style={{
          maxHeight: '200px', overflow: 'auto'
        }}>{value}
        </div>
      </TableCell>
    )
  })
}
