import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeAlcoholBrand = this.onChangeAlcoholBrand.bind(this);
        this.onChangeAlcoholQuantity = this.onChangeAlcoholQuantity.bind(this);
        this.onChangeAlcoholDescription = this.onChangeAlcoholDescription.bind(this);
        this.onChangeAlcoholImage = this.onChangeAlcoholImage.bind(this);
        
        this.state = {
            brand:'',
            quantity:'',
            description:'',
            image:''
        }
    }

    getBase64(file, cb) {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload =  () => {
            cb(reader.result)
        };
        reader.onerror = (error) => {
            console.log('Error: ', error);
        };
    }

    handleSubmit(e){
        e.preventDefault();
        console.log(`Button clicked 
        ${this.state.brand},
        ${this.state.quantity},
        ${this.state.description},
        ${this.state.image}`);

        const alcohol ={
            brand:this.state.brand,
            quantity:this.state.quantity,
            description:this.state.description,
            image:this.state.image
        }

        axios.post('http://localhost:5007/api/alcohols',alcohol)
        .then()
        .catch(
            console.log("Error")
        );

        this.setState({
            brand:'',
            quantity:'',
            description:'',
            image:''
        })
    }

    onChangeAlcoholBrand(e){
        this.setState({
            brand:e.target.value
        })
    }
    onChangeAlcoholQuantity(e){
        this.setState({
            quantity:e.target.value
        })
    }
    onChangeAlcoholDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeAlcoholImage(e){
        let files = e.target.files;

         this.getBase64(files[0], (result) => {
                this.state.image = result;
              })
    }

    render() {
        return (
            <div className="App" style={{ display: 'flex', margin: '30px', justifyContent: 'center', alignItems: 'center' }}>
            {/*React Card*/}
            <Card style={{width: '80%', lenght:'100%', backgroundColor: '#90ee90' }} >
                <Card.Body>
                    <Card.Title>Adding a alcohol</Card.Title>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>Type alcohol Brand </label>
                            <input type="text" 
                            className="form-control" 
                            value={this.state.brand} 
                            onChange={this.onChangeAlcoholBrand} 
                            required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Type Alcohol Quantity </label>
                            <input type="text" 
                            className="form-control" 
                            value={this.state.quantity} 
                            onChange={this.onChangeAlcoholQuantity} 
                            required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Type Alcohol Description </label>
                            <input type="text" 
                            className="form-control" 
                            value={this.state.description} 
                            onChange={this.onChangeAlcoholDescription} 
                            required />
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label>Upload Image: </label>
                        <input type="file"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeAlcoholImage}
                            />
                        </div>
                        <br></br>
                        <Button type="submit" value="Submit" variant="danger">Add Alcohol</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
            
        );
    }
}