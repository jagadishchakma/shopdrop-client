import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Toasts from '../../Toasts/Toasts';
import Menu from '../Menu/Menu';
import './EditProduct.css';

const EditProduct = () => {
    const [product, setProduct] = useState({});
    const {name, weight, price, photo} = product;
    const {id} = useParams();
    const [update, setUpdate] = useState(false);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        fetch('https://pumpkin-crisp-14693.herokuapp.com/product/'+id, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(products => setProduct(products[0]))
    },[id, update]);
    const handleUpdateChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const newProduct = {...product};
        newProduct[name] = value;
        setProduct(newProduct);
    };
    const handleUpdateSubmit = (e) => {
        setLoading(true);
        if(!(name === null || weight === null || price === null)){
            fetch('https://pumpkin-crisp-14693.herokuapp.com/product/update/'+id, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json)
            .then(data => {
                console.log(data);
                setUpdate(!update);
                setLoading(false);
                setShow(true);
            })
        }
        e.preventDefault();
    }
    
    return (
        <div>
            <Menu/>
            <div className="edit-product">
                <form onSubmit={handleUpdateSubmit}>
                    <div className="form-group p-preview">
                        <h2>Edit Product</h2>
                        <img src={photo} alt="" width="200" height="250"/>
                    </div> 
                    <div className="form-group">
                        <label htmlFor="name">Product Name:</label>
                        <input type="text" className="form-control" name="name" onChange={handleUpdateChange} value={name} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="weight">Weight:</label>
                        <input type="number" className="form-control" name="weight" onChange={handleUpdateChange} value={weight} required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="price">Price:</label>
                        <input type="number" className="form-control" name="price" onChange={handleUpdateChange} value={price} required/>
                    </div>
                    <div className="form-group update-action">
                        {
                            loading ? <div className="spinner-border text-success" role="status">
                            <span className="sr-only">Loading...</span>
                           </div> : <div><input type="submit" className="btn btn-success " value="Update Changes"/></div>
                        }
                        {
                            show ? <Toasts toasts={{show, setShow, message: 'Successfully Product Updated'}} className="float-left"/> : ''
                        }
                        
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;