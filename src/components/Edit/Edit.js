import React, { Component } from 'react';
import FirebaseService from '../../services/FirebaseService';
import { urls } from '../../util/urlUtils';
import { Typography, TextField, Button} from '@material-ui/core';

class Edit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: this.props.location.state.key,
            temperature: this.props.location.state.data.temperature,
            humidity: this.props.location.state.data.humidity,
            data: this.props.location.state.data.data,
            client: this.props.location.state.data.client
        }
    }
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleEdit = (event) => {
        event.preventDefault();
        const {key, ...data} = {key: this.state.key, ...this.state}

        FirebaseService.updateData('leituras', key, { data }).then(
            this.props.history.push(urls.data.path)
        )
        
    }

    render() {
        const { temperature, humidity, data, client } = this.state;

        return (        
            <React.Fragment>
                <Typography component="h2">Edit</Typography>
                <form onSubmit={this.handleEdit}>
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
                        EDIT
                    </Button>
                </form>
            </React.Fragment>
        );
    }
}
    

export default Edit;