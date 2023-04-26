import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class AlcoholItem extends React.Component {
    constructor(){
        super();
        this.DeleteAlcohol = this.DeleteAlcohol.bind(this);
    }
    DeleteAlcohol(e){
        e.preventDefault();

        axios.delete('http://localhost:5007/api/alcohol/'+this.props.alcohol._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.alcohol.brand}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.alcohol.image}></img>
                            <footer >
                                {this.props.alcohol.description}
                            </footer>
                        </blockquote>
                        <p>{this.props.alcohol.quantity}</p>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.alcohol._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteAlcohol}>Delete</Button>
                </Card>
            </div>
        );
    }
}