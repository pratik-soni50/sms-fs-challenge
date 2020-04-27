import React from 'react';
import Grid from '@material-ui/core/Grid';
import DataTable from './DataTable';
import DataForm from './DataForm';

export default function Data() {
  return (
    <Grid container spacing={1}>
      <Grid item sm={8}>
        <DataTable />
      </Grid>
      <Grid item sm={4}>
        <DataForm />
      </Grid>
    </Grid>
  )
}
