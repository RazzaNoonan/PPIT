import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export function Edit(){
    let {id} = useParams();
    const [make, setMake] = useState('');
    const [reg, setReg] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/car/'+id)
        .then((response)=>{
            setMake(response.data.make);
            setReg(response.data.reg);
            setDescription(response.data.description);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editCar = {
            make:make,
            reg:reg,
            description:description
        }

        axios.put('http://localhost:4000/api/car/'+id,editCar)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Editing Car</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit Car model: </label>
                        <input type="text"
                            className="form-control"
                            value={make}
                            onChange={(e)=>{setMake(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Car Reg: </label>
                        <input type="text"
                            className="form-control"
                            value={reg}
                            onChange={(e)=>{setReg(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Car Description: </label>
                        <input type="text"
                            className="form-control"
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                        
                    </div>
                <input type="submit" value="Edit Car"></input>
            </form>
        </div>
    );
}