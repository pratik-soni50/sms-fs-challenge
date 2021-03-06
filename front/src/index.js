import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { BrowserRouter as Router } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Notifier from './Component/Notifier';

import theme from './theme';
import store from './utils/generateStore';
import * as serviceWorker from './serviceWorker';

import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <SnackbarProvider>
            <Notifier />
            <App />
          </SnackbarProvider>
        </MuiPickersUtilsProvider>
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
