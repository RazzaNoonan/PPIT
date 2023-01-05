import React from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export class Create extends React.Component {

    constructor(){
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeCarMake = this.onChangeCarMake.bind(this);
        this.onChangeCarReg = this.onChangeCarReg.bind(this);
        this.onChangeCarDescription = this.onChangeCarDescription.bind(this);
        this.onChangeCarImage = this.onChangeCarImage.bind(this);
        
        this.state = {
            make:'',
            reg:'',
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
        ${this.state.make},
        ${this.state.reg},
        ${this.state.description},
        ${this.state.image}`);

        const car ={
            make:this.state.make,
            reg:this.state.reg,
            description:this.state.description,
            image:this.state.image
        }

        axios.post('http://localhost:4000/api/cars',car)
        .then()
        .catch(
            console.log("Error")
        );

        this.setState({
            make:'',
            reg:'',
            description:'',
            image:''
        })
    }

    onChangeCarMake(e){
        this.setState({
            make:e.target.value
        })
    }
    onChangeCarReg(e){
        this.setState({
            reg:e.target.value
        })
    }
    onChangeCarDescription(e){
        this.setState({
            description:e.target.value
        })
    }

    onChangeCarImage(e){
        let files = e.target.files;

         this.getBase64(files[0], (result) => {
                this.state.image = result;
              })
    }

    render() {
        return (
            <div className="App" style={{ display: 'flex', margin: '30px', justifyContent: 'center', alignItems: 'center' }}>
            {/*React Card*/}
            <Card style={{width: '100%', lenght:'100%', backgroundColor: '#e47200' }} >
                <Card.Body>
                    <Card.Title>Adding a car</Card.Title>
                    <form onSubmit={this.handleSubmit}>

                        <div className="form-group">
                            <label>Type Car Model </label>
                            <input type="text" 
                            className="form-control" 
                            value={this.state.make} 
                            onChange={this.onChangeCarMake} 
                            required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Type Car Registration </label>
                            <input type="text" 
                            className="form-control" 
                            value={this.state.reg} 
                            onChange={this.onChangeCarReg} 
                            required />
                        </div>
                        <br></br>
                        <div className="form-group">
                            <label>Type Car Description </label>
                            <input type="text" 
                            className="form-control" 
                            value={this.state.description} 
                            onChange={this.onChangeCarDescription} 
                            required />
                        </div>
                        <br></br>
                        <div className="form-group">
                        <label>Type Image: </label>
                        <input type="file"
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeCarImage}
                            />
                        </div>
                        <br></br>
                        <Button type="submit" value="Submit" variant="danger">Add Car</Button>
                    </form>
                </Card.Body>
            </Card>
        </div>
            // <div>
            //     <h3>Hello from Create Component!</h3>
            //     <form onSubmit={this.handleSubmit}>
            //         <div className="form-group">
            //             <label>Add Car model: </label>
            //             <input type="text"
            //                 className="form-control"
            //                 value={this.state.make}
            //                 onChange={this.onChangeCarMake}
            //             />
            //         </div>

            //         <div className="form-group">
            //             <label>Add Car Reg: </label>
            //             <input type="text"
            //                 className="form-control"
            //                 value={this.state.reg}
            //                 onChange={this.onChangeCarReg}
            //             />
            //         </div>

            //         <div className="form-group">
            //             <label>Add Desription: </label>
            //             <input type="text"
            //                 className="form-control"
            //                 value={this.state.description}
            //                 onChange={this.onChangeCarDescription}
            //             />
            //         </div>

            //         <div className="form-group">
            //             <label>Add Image: </label>
            //             <input type="file"
            //                 className="form-control"
            //                 value={this.state.image}
            //                 onChange={this.onChangeCarImage}
            //             />
            //         </div>

                    


            //         <input type="submit" value="Add Car" />
            //     </form>
            // </div>
        );
    }
}