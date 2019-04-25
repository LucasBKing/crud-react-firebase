import React, { Component } from 'react';
import './App.css';
import { Route, withRouter } from 'react-router-dom';
import { urls } from '../../util/urlUtils';
import Welcome from '../Welcome/Welcome';
import Add from '../Add/Add';
import FirebaseService from '../../services/FirebaseService';
import DataTable from '../DataTable/DataTable';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Card, CardContent } from '@material-ui/core';
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
      data: []
    };
  }

  componentDidMount() {
    FirebaseService.getDataList('leituras', (dataReceived) =>    this.setState({data: dataReceived}))
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
          <Card style={{margin: '50px'}}>
            <CardContent>

                <Route exact
                      path={urls.home.path}
                      render={(props) => <Welcome {...props}/>}
                />

                <Route exact
                      path={urls.data.path}
                      render={(props) => 
                          <DataTable {...props} data={this.state.data}/>}
                />

                <Route exact
                      path={urls.add.path}
                      render={(props) => 
                                <Add {...props}/>}
                />
            </CardContent>
        </Card>
          <DataTable data={this.state.data}/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default withRouter(App);
