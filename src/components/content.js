import React from "react";
import Button from 'react-bootstrap/Button';

export class Content extends React.Component {
    render() {
        return (
            <div >
                <h1>Home page</h1>
                <h5>It is {new Date().toLocaleTimeString()}.</h5>
                <br></br>
                <br></br>
                <img 
                src=""
                alt="new"
                />
                <h3>Click here to view the Garage</h3>
                <a href="/read">
                <button>Garage</button>
                </a>
            </div>
        );
    }
}