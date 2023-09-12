import { Divider, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import { nanoid } from "@reduxjs/toolkit";
import { TableData } from ".";
import { Address, Role, User, enumList } from "../../config/const";
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

  return sortedData.map(row => {
    return (
      <TableBody>
        <TableRow>
          {renderTableCells(row, fields)}
          <TableCell>
            <Edit sx={{ mr: "20px", cursor: 'pointer' }} />
            <Delete sx={{ cursor: 'pointer' }} />
          </TableCell>
        </TableRow>
      </TableBody>
    )
  })
}

const renderTableCell = (value: string | number | { [key: string]: string | number }, key?: string) => {
  let currentEnum: typeof Address | typeof Role | typeof User | null = null;
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

  if (key === 'completed') {
    dataString = value ? 'Да' : 'Нет'
  }



  if (currentEnum) {
    dataString = `${currentEnum[value as keyof typeof currentEnum]}`
  }


  if (typeof value === 'string' || typeof value === 'number') {
    dataString = value.toString()
  }

  return (
    <TableCell key={nanoid()}>
      <div style={{
        maxHeight: '200px', overflow: 'auto'
      }}>
        {dataString}
      </div>
    </TableCell>
  )

}

export const renderTableCells = (row: { [key: string]: string | number }, fields: { [key: string]: string }) => {

  let currentEnum: typeof Address | typeof Role | typeof User | null = null;


  return Object.entries(row).map(([key, value]) => { return renderTableCell(value, key) })
  // if (key === 'role') {
  //   currentEnum = enumList[1]
  // }


  // if (typeof value === 'object' && Array.isArray(value)) {

  //   if (key === 'users') {
  //     currentEnum = enumList[2];
  // return <TableCell key={nanoid()}>
  //   <div style={{
  //     maxHeight: '200px', overflowX: 'auto', overflowY: 'auto',
  //   }}>
  //     {(value as string[]).map(item => {

  //       return (
  //         <div>
  //           {Object.entries(item).map(([key, value]) => {
  //             currentEnum = enumList[2];
  //             return <div>{`${currentEnum[key as keyof typeof currentEnum]}: ${value}`}</div>
  //           })}
  //           <Divider sx={{ mb: '10px' }} />
  //         </div>
  //       )
  //     })}
  //   </div>
  // </TableCell>
  //   }

  //   return <TableCell key={nanoid()}>
  //     <div style={{
  //       maxHeight: '200px', overflowX: 'auto', overflowY: 'auto',
  //     }}>
  //       {(value as string[]).map(item => {

  //         return (
  //           <div>
  //             {Object.entries(item).map(([key, value]) => {
  //               currentEnum = enumList[0];
  //               return <div>{`${currentEnum[key as keyof typeof currentEnum]}: ${value}`}</div>
  //             })}
  //             <Divider sx={{ mb: '10px' }} />
  //           </div>
  //         )
  //       })}
  //     </div>
  //   </TableCell>
  // }

  // if (currentEnum) {
  //   return (
  //     <TableCell key={nanoid()}>
  //       <div style={{
  //         maxHeight: '200px', overflow: 'auto'
  //       }}>{`${currentEnum[value as keyof typeof currentEnum]}`}
  //       </div>
  //     </TableCell>
  //   )
  // }
  //   return (
  //     <TableCell key={nanoid()}>
  //       <div style={{
  //         maxHeight: '200px', overflow: 'auto'
  //       }}>{value}
  //       </div>
  //     </TableCell>
  //   )
  // })
}
