import React, { Component } from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
//import { lightBlue } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c5cae9'
    }
  }
})

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar variant="dense">
              <Typography type="title" color="inherit">
                APPTITLE
              </Typography>
            </Toolbar>
          </AppBar>
          <Navbar />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
