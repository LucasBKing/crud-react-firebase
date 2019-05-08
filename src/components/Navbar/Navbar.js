import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Button } from '@material-ui/core';
import Add from '../Add/Add';
import Welcome from '../Welcome/Welcome';
import DataTable from '../DataTable/DataTable'
import Edit from '../Edit/Edit';
import Login from '../Authentication/Login';
import FirebaseService from '../../services/FirebaseService';
import { urls, privateUrls } from "../../util/urlUtils";
import { Switch, Route, Link, BrowserRouter} from "react-router-dom";

class Navbar extends Component {
    constructor(props) {
       super(props);

       this.state = {
           data: [],
           value: 0,
           user: {}
       }
    }

    componentDidMount() {
        let user = FirebaseService.getUser();
        this.setState({
          user: user
        });
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
    }

    handleLogout = () => {
        FirebaseService.signOut();
    }

    render() {
        const { value } = this.state;

        return(
             <BrowserRouter>
                <AppBar position="static">
                    <Route
                    path="/"
                    render={({ location }) => (
                        <React.Fragment>
                            <Tabs   variant="fullWidth" 
                                    value={value} 
                                    onChange={this.handleChange}
                                    centered
                            >

                                {   
                                    this.state.user 
                                    ? 
                                    Object.values(urls).map((url, index) => {
                                        return <Tab label={url.name} value={url.name} key={index} component={Link} to={url.path} />        

                                    })
                                    :
                                    Object.values(privateUrls).map((url, index) => {
                                        return <Tab label={url.name} value={url.name} key={index} component={Link} to={url.path} />
                                    })
                                    

                                }
                            </Tabs>
                            <Switch>
                                <Route 
                                    path="/"
                                    exact={true}
                                    render={() => <Welcome />}
                                />
                                <Route 
                                    path="/add"
                                    exact={true}
                                    render={() => <Add />}
                                />
                                <Route 
                                    path="/data"
                                    exact={true}
                                    render={() => <DataTable />}
                                />
                                <Route 
                                    path="/login"
                                    exact={true}
                                    render={() => <Login />}
                                />
                                <Route exact
                                    path={privateUrls.edit.path}
                                    render={(props) => <Edit {...props} />}
                                />
                            </Switch>
                        </React.Fragment>
                    )}
                    />
                </AppBar>
            </BrowserRouter>
          
        );
    }
}
export default Navbar;