import React from "react";
import { Alcohols } from "./alcohols";
import axios from "axios";
import '../styles/read.css';

export class Read extends React.Component {
    constructor() {
        super();
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5007/api/alcohols')
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
        const { alcohols } = this.state;

        if (!alcohols.length) {
            return <div>No alcohols found. Try adding some!</div>;
        }

        return (
            <div className="alcohols-container">
                <Alcohols alcohols={alcohols} Reload={this.componentDidMount} />
            </div>
        );
    }
}
