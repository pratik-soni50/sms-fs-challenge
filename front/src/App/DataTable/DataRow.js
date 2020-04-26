import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export default function DataRow({ row, index }) {
  const labelId = `enhanced-table-checkbox-${index}`;
  return (
    <TableRow
      hover
      tabIndex={-1}
    >
      <TableCell component="th" id={labelId} scope="row" padding="none">
        {row.city}
      </TableCell>
      <TableCell>{row.start_date}</TableCell>
      <TableCell>{row.end_date}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell>{row.status}</TableCell>
      <TableCell>{row.color}</TableCell>
    </TableRow>
  );
}
