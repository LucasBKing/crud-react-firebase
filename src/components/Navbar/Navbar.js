import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Add from '../Add/Add';
import Welcome from '../Welcome/Welcome';
import DataTable from '../DataTable/DataTable'
import Edit from '../Edit/Edit';
import { urls, privateUrls } from "../../util/urlUtils";
import { Switch, Route, Link, BrowserRouter } from "react-router-dom";

class Navbar extends Component {
    constructor() {
       super();
       
       this.state = {
           data: [],
           value: 0
       }
    }

    handleChange = (event, value) => {
        this.setState({
            value
        });
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
                                Object.values(urls).map((url, index) => {
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