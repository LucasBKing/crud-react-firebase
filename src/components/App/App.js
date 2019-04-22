import React, { Component } from 'react';
import './App.css';
import DataTable from '../DataTable/DataTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: red,
  }
})

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
          {
              key: 'test key key',
              temperatura: 'test key temperatura',
              umidade: 'test key umidade',
              cliente: 'test key cliente',
              data: 'test key data',
          }
      ]
  };
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <AppBar position="static">
            <Toolbar>
              <Typography type="title" color="inherit">
                APPTITLE
              </Typography>
            </Toolbar>
          </AppBar>
          <DataTable data={this.state.data}/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default App;
