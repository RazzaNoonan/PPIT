import React from "react";
import { Cars } from "./cars";
import axios from "axios";

export class Read extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/cars')
            .then((response) => {
                this.setState({ cars: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        cars: []
    }

    render() {
        return (
            <div>
                <h3>Cars listed below!</h3>
                <Cars cars={this.state.cars} Reload={this.componentDidMount}></Cars>
            </div>
        );
    }
}