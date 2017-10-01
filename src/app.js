import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MainComponent from './main.jsx';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {cyan500} from 'material-ui/styles/colors';

const muiTheme = getMuiTheme({
  palette: {
    textColor: cyan500,
  },
  appBar: {
    height: 50,
  },
});

const App = () => (
  <MuiThemeProvider muiTheme={muiTheme}>
    <MainComponent />
  </MuiThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('app'));
