import React, { Component } from 'react';
import {Table, 
        TableBody, 
        TableCell, 
        TableHead, 
        TableRow,
        Button    
} from "@material-ui/core";
import FirebaseService from '../../services/FirebaseService';
import { privateUrls } from '../../util/urlUtils';
import { Link } from 'react-router-dom';


class DataTable extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        FirebaseService.getDataList('leituras', (dataReceived) => this.setState({data: dataReceived}))
    }

    handleRemove = (key) => {
        FirebaseService.remove('leituras', key);
    }

    render() {
        const { data } = this.state;
        return (
            <React.Fragment>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Key</TableCell>
                            <TableCell>Temperature</TableCell>
                            <TableCell>Humidity</TableCell>
                            <TableCell>Client</TableCell>
                            <TableCell>Data</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map((item, index) => 
                                <TableRow key={index}>
                                    <TableCell>{item.key}</TableCell>
                                    <TableCell>
                                        {item.data.temperature}
                                    </TableCell>
                                    <TableCell>{item.data.humidity}</TableCell>
                                    <TableCell>{item.data.client}</TableCell>
                                    <TableCell>{item.data.data}</TableCell>
                                    <TableCell>
                                    
                                        <Link 
                                            to={{
                                                pathname: privateUrls.edit.pathWithouParam + index,
                                                state: item
                                            }}
                                        >
                                            <Button>
                                                Edit
                                            </Button>
                                        </Link>
                                        <Button onClick={() => this.handleRemove(item.key)}>
                                            Remove
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </React.Fragment>
        );
    }
}

export default DataTable;