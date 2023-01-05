import React from "react";
import Card from 'react-bootstrap/Card';
import Button  from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

export class CarItem extends React.Component {
    constructor(){
        super();
        this.DeleteCar = this.DeleteCar.bind(this);
    }
    DeleteCar(e){
        e.preventDefault();

        axios.delete('http://localhost:4000/api/car/'+this.props.car._id)
        .then((res)=>{this.props.Reload();})
        .catch();
    }
    render() {
        return (
            <div>

                <Card>
                    <Card.Header>{this.props.car.make}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.car.image}></img>
                            <footer >
                                {this.props.car.description}
                            </footer>
                        </blockquote>
                    </Card.Body>
                    <Link to={'/edit/' + this.props.car._id} className="btn btn-primary">Edit</Link>
                    <Button variant="danger" onClick={this.DeleteCar}>Delete</Button>
                </Card>
            </div>
        );
    }
}