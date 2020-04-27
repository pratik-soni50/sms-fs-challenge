import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { DatePicker } from '@material-ui/pickers';

import DataTableHead from './DataTableHead';
import DataRow from './DataRow';
import { getRows, clearDeleteRow } from '../../../actionCreator';
import appConfig from '../../../appConfig';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
  filter: {
    padding: theme.spacing(2),
  },
}));

export default function DataTable() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, count, loading } = useSelector(state => state.getRows);
  const { result } = useSelector(state => state.addEditRow);
  const { result: deleteResult } = useSelector(state => state.deleteRow);
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('id');
  const [page, setPage] = React.useState(0);
  const [perPage, setperPage] = React.useState(10);
  const [minStart, setMinStart] = React.useState(null);
  const [maxStart, setMaxStart] = React.useState(null);
  const [minEnd, setMinEnd] = React.useState(null);
  const [maxEnd, setMaxEnd] = React.useState(null);

  useEffect(() => {
    !loading && dispatch(getRows({ page: page + 1, perPage, order, orderBy, minStart, maxStart, minEnd, maxEnd }));
  }, [order, orderBy, page, perPage, result, deleteResult, minStart, maxStart, minEnd, maxEnd]);

  useEffect(() => {
    deleteResult && dispatch(clearDeleteRow());
  }, [deleteResult]);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangePerPage = (event) => {
    setperPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container className={classes.filter} spacing={2}>
          <Grid item xs={6}>
            <DatePicker
              disableToolbar
              variant="inline"
              format={appConfig.DATE_FORMAT}
              label="Min Start Date"
              value={minStart}
              onChange={setMinStart}
              autoOk={true}
            />
            <DatePicker
              disableToolbar
              variant="inline"
              format={appConfig.DATE_FORMAT}
              label="Max Start Date"
              value={maxStart}
              onChange={setMaxStart}
              minDate={minStart}
              minDateMessage="Max Date should not before Min Date"
              autoOk={true}
            />
          </Grid>
          <Grid item xs={6}>
            <DatePicker
              disableToolbar
              variant="inline"
              format={appConfig.DATE_FORMAT}
              label="Min End Date"
              value={minEnd}
              onChange={setMinEnd}
              autoOk={true}
            />
            <DatePicker
              disableToolbar
              variant="inline"
              format={appConfig.DATE_FORMAT}
              label="Max End Date"
              value={maxEnd}
              onChange={setMaxEnd}
              minDate={minEnd}
              minDateMessage="Max Date should not before Min Date"
              autoOk={true}
            />
          </Grid>
        </Grid>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby="tableTitle"
            size={'medium'}
            aria-label="enhanced table"
          >
            <DataTableHead
              classes={classes}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {
                data
                  ? data.map(row => <DataRow row={row} key={row._id} />)
                  : <TableRow><TableCell colSpan={6} /></TableRow>
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 20, 50]}
          component="div"
          count={count}
          rowsPerPage={perPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangePerPage}
        />
      </Paper>
    </div>
  );
}
