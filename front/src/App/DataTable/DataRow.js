import React from 'react';
import { format } from 'date-fns';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import appConfig from '../../appConfig';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { setEditData } from '../../actionCreator';

export default function DataRow({ row }) {
  const dispatch = useDispatch();
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell>{row.city}</TableCell>
      <TableCell>{row.start_date && format(new Date(row.start_date), appConfig.DATE_FORMAT)}</TableCell>
      <TableCell>{row.end_date && format(new Date(row.end_date), appConfig.DATE_FORMAT)}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell>{row.status}</TableCell>
      <TableCell>{row.color}</TableCell>
      <TableCell align="center">
        <Button onClick={() => { dispatch(setEditData(row)) }}>Edit</Button>
        <Button>Delete</Button>
      </TableCell>
    </TableRow>
  );
}
