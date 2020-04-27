import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import appConfig from '../../appConfig';
import { setEditData, deleteRow } from '../../actionCreator';

export default function DataRow({ row }) {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.deleteRow);
  return (
    <TableRow hover tabIndex={-1}>
      <TableCell>{row.city}</TableCell>
      <TableCell>{row.start_date && format(new Date(row.start_date), appConfig.DATE_FORMAT)}</TableCell>
      <TableCell>{row.end_date && format(new Date(row.end_date), appConfig.DATE_FORMAT)}</TableCell>
      <TableCell align="right">{row.price}</TableCell>
      <TableCell>{row.status}</TableCell>
      <TableCell>{row.color}</TableCell>
      <TableCell align="center">
        <IconButton
          color="primary"
          size="small"
          onClick={() => { dispatch(setEditData(row)) }}
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="delete"
          size="small"
          disabled={loading}
          onClick={() => { dispatch(deleteRow(row.id)) }}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
