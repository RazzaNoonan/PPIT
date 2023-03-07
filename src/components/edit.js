import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';

export function Edit(){
    let {id} = useParams();
    const [brand, setBrand] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');

    useEffect(()=>{
        axios.get('http://localhost:4000/api/alcohol/'+id)
        .then((response)=>{
            setBrand(response.data.brand);
            setQuantity(response.data.quantity);
            setDescription(response.data.description);
        })
        .catch()
    },[]);

    const handleSubmit = (e)=>{
        e.preventDefault();

        const editAlcohol = {
            brand:brand,
            quantity:quantity,
            description:description
        }

        axios.put('http://localhost:4000/api/alcohol/'+id,editAlcohol)
        .then()
        .catch();
    }

    return(
        <div>
            <h3>Editing Alcohol</h3>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
                        <label>Edit alcohol Brand: </label>
                        <input type="text"
                            className="form-control"
                            value={brand}
                            onChange={(e)=>{setBrand(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Alcohol Quantity: </label>
                        <input type="text"
                            className="form-control"
                            value={quantity}
                            onChange={(e)=>{setQuantity(e.target.value)}}
                        />
                    </div>
                    <div className="form-group">
                        <label>Edit Alcohol Description: </label>
                        <input type="text"
                            className="form-control"
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                        
                    </div>
                <input type="submit" value="Edit Alcohol"></input>
            </form>
        </div>
    );
}