import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';
import { Provider } from 'react-redux';
import store from './store';

const theme = createMuiTheme({
  palette:{
    primary:{
      main:'#28402e',
      contrastText:'#fff'},
    secondary: {
      main:'#98b3a4',
      contrastText:'#28402e'
    }
  },
  typography:{
    fontFamily: 'Ubuntu',
  }
})

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
