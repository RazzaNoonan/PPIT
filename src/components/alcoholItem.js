import React from "react";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
import axios from "axios";
import '../styles/alcoholItem.css';

export class AlcoholItem extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };
        this.DeleteAlcohol = this.DeleteAlcohol.bind(this);
        this.handleShowModal = this.handleShowModal.bind(this);
        this.handleHideModal = this.handleHideModal.bind(this);
    }

    handleShowModal() {
        this.setState({ showModal: true });
    }

    handleHideModal() {
        this.setState({ showModal: false });
    }

    DeleteAlcohol(e) {
        e.preventDefault();

        axios.delete('http://localhost:5007/api/alcohol/' + this.props.alcohol._id)
            .then((res) => {
                this.props.Reload();
                this.handleHideModal();
            })
            .catch();
    }

    render() {
        return (
            <div>
                <Card>
                    <Card.Header>{this.props.alcohol.brand}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <img src={this.props.alcohol.image} className="alcohol-img" />
                            <footer>
                                {this.props.alcohol.description}
                            </footer>
                        </blockquote>
                        <p>{this.props.alcohol.quantity}</p>
                    </Card.Body>
                    <div className="button-group">
                        <Link to={'/edit/' + this.props.alcohol._id} className="btn btn-outline-primary square">
                            <FaPencilAlt />
                        </Link>
                        <Button variant="outline-danger square" onClick={this.handleShowModal}>
                            <FaTrash />
                        </Button>
                    </div>
                </Card>

                <Modal show={this.state.showModal} onHide={this.handleHideModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirmation</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this item?
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleHideModal}>
                            Cancel
                        </Button>
                        <Button variant="danger" onClick={this.DeleteAlcohol}>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}
