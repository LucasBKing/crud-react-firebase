import React, { Component } from 'react';
import { urls }  from '../../util/urlUtils'; 
import FirebaseService from '../../services/FirebaseService';
import {Button, TextField, Typography} from "@material-ui/core";
import {withRouter} from "react-router-dom";

class Add extends Component {
    constructor() {
        super();

        this.state = {
            temperature: '',
            humidity: '',
            client: '',
            data: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const data = this.state;
        const newId = FirebaseService.pushData('leituras', {
            data
        });
      
        this.props.history.push(urls.data.path)
    }
    render() {
        const { temperature, humidity, client, data } = this.state;
        return(
            <React.Fragment>
                <Typography component="h2">Add New</Typography>
                <form onSubmit={this.handleSubmit}>
                    <TextField 
                        className="input-field"
                        type="text"
                        defaultValue={temperature}
                        label="Temperature"
                        name="temperature"
                        required
                        onChange={this.handleChange}
                    />
                    <TextField 
                        className="input-field"
                        type="text"
                        defaultValue={humidity}
                        label="Humidity"
                        name="humidity"
                        required
                        onChange={this.handleChange}
                    />
                    <TextField 
                        className="input-field"
                        type="text"
                        defaultValue={data}
                        label="Data"
                        name="data"
                        required
                        onChange={this.handleChange}
                    />
                    <TextField 
                        className="input-field"
                        type="email"
                        defaultValue={client}
                        label="Client"
                        name="client"
                        required
                        onChange={this.handleChange}
                    />
                    <Button
                        type="submit"
                        style={{marginTop: '20px', display: 'inline-block'}}
                    >
                        Add
                    </Button>
                </form>
            </React.Fragment>
        )
    }
};

export default withRouter(Add);