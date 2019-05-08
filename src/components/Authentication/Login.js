import React, { Component } from 'react';
import FirebaseService from '../../services/FirebaseService';
import { urls } from '../../util/urlUtils';
import { FormControl, InputLabel, Input, Button} from '@material-ui/core';
import {withRouter} from "react-router-dom";


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { email, password } = this.state;
        
        FirebaseService.signIn(email, password);
 
        this.props.history.push(urls.home.path);
   
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit} >
                <FormControl margin="normal" required >
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" autoComplete="email" autoFocus onChange={this.handleChange} />
                </FormControl>
                <FormControl margin="normal" required >
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" autoComplete="current-password" onChange={this.handleChange} />
                </FormControl>
                <Button type="submit" variant="contained" color="primary" >
                    SignIn
                </Button>
            </form>   
        );
    }
}

export default withRouter(Login);