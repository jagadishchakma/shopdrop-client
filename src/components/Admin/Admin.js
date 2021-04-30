import axios from 'axios';
import React, { useState } from 'react';
import AddProduct from './AddProduct/AddProduct';
import './Admin.css';
import Menu from './Menu/Menu';


const Admin = () => {
    document.title = 'Admin Manage Product';
    const [product, setProduct] = useState({
        name: '',
        weight: '',
        price: '',
        photo: ''
    });
    const [error, setError] = useState({
        name: true,
        weight: true,
        price: true,
        photo: true,
        loading: false,
        img: ''
    });
    const [show, setShow] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handleProductChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        if(name === 'name'){
            const check = /\w{3}/g.test(value);
            if(check){
                addProduct(name, value);
                addError(name, false);
            }else{
                addProduct(name, '');
                addError(name, true);
            }
        }
        if(name === 'weight'){
            const check = /\d{1}/g.test(value);
            if(check){
                addProduct(name, value);
                addError(name, false);
            }else{
                addProduct(name, '');
                addError(name, true);
            }
        }
        if(name === 'price'){
            const check = /\d{1}/g.test(value);
            if(check){
                addProduct(name, value);
                addError(name, false);
            }else{
                addProduct(name, '');
                addError(name, true);
            }
        }
        if(name === 'photo'){
            const file = e.target.files[0];
            const fileName = file.name;
            const fileExt = fileName.split('.').pop();
            if(fileExt === 'jpg' || fileExt === 'jpeg' || fileExt === 'png' || fileExt === 'gif'){
                const imageData = new FormData();
                imageData.set('key','bd2351e355fd7cd06bd5a7f2f329da2f');
                imageData.set('image',file);
                addError('loading', true);
                axios.post('https://api.imgbb.com/1/upload', imageData)
                .then(data => {
                    addProduct(name, data.data.data.url);
                    addError(name, false);
                    addError('img', data.data.data.url);
                })
                .catch(err => {
                    addProduct(name, '');
                    addError(name, true);
                })
            }else{
                addProduct(name, '');
                addError(name, true);
            }
        }
        function addProduct(name, value){
            const newProduct = {...product};
            newProduct[name] = value;
            setProduct(newProduct);
        }
        function addError(name, value){
            const newError = {...error};
            newError[name] = value;
            setError(newError);
        }
    }
    const handleProductSubmit = (e) => {
        const {name, weight, price, photo} = product;
        if(!(name === null || weight === null || price === null || photo === null)){
            setSubmit(true);
            fetch('https://pumpkin-crisp-14693.herokuapp.com/addProduct', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(product)
            })
            .then(res => res.json())
            .then(data => {
                setShow(true);
                setSubmit(false);
                setError({
                    name: true,
                    weight: true,
                    price: true,
                    photo: true,
                    loading: false,
                    img: ''
                });
                e.target.reset();
            })
        }
        e.preventDefault();
       
    }

    const actionProps =  {handleProductSubmit, handleProductChange, error, show, setShow, submit};
    return (
        <div>
            <Menu/>
            <AddProduct actionProps={actionProps}/>
        </div>
    );
};

export default Admin;