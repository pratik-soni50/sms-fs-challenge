import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import HeaderBar from '../Component/Header';
import Sidebar from '../Component/Sidebar';
import Data from './Data';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(1),
    paddingTop: theme.spacing(9),
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div>
      <HeaderBar />
      <div className={classes.root}>
        <Sidebar />
        <main className={classes.content}>
          <Switch>
            <Route path="/dashboard"><Data /></Route>
            <Route path="/products">Products</Route>
            <Route path="/documents">Documents</Route>
            <Route exact path={`/`}><Redirect to="/dashboard" /></Route>
            <Route path={`*`}>404</Route>
          </Switch>
        </main>
      </div>
    </div>
  )
}
