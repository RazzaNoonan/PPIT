import React from "react";
import { Alcohols } from "./alcohols";
import axios from "axios";

export class Read extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }
   
    componentDidMount() {
        axios.get('http://localhost:4000/api/alcohols')
            .then((response) => {
                this.setState({ alcohols: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    state = {
        alcohols: []
    }

    render() {
        return (
            <div>
                <h3>Alcohols listed below!</h3>
                <Alcohols alcohols={this.state.alcohols} Reload={this.componentDidMount}></Alcohols>
            </div>
        );
    }
}