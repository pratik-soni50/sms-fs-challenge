import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headCells = [
  { id: 'city', numeric: false, disablePadding: false, label: 'City' },
  { id: 'start_date', numeric: false, disablePadding: false, label: 'Start Date' },
  { id: 'end_date', numeric: false, disablePadding: false, label: 'End Date' },
  { id: 'price', numeric: true, disablePadding: false, label: 'Price' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'color', numeric: false, disablePadding: false, label: 'Color' },
];

function DataTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell
          padding="default"
          align="center"
        >Action</TableCell>
      </TableRow>
    </TableHead>
  );
}

DataTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
};

export default DataTableHead;
