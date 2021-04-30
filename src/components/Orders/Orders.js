import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderList from './OrderList';
import './Orders.css';


const Order = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://pumpkin-crisp-14693.herokuapp.com/orders',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({email: loggedInUser.email})
        })
        .then(res => res.json())
        .then(data => setProducts(data))
    },[loggedInUser]);
    document.title = 'Orders History';
    return (
        <div className="order-history">
            <h2>Hi {loggedInUser.name}, your email is {loggedInUser.email} and your order history</h2>

            {
                products.map(product => <OrderList product={product} key={product._id}/>)
            }
            
        </div>
    );
};

export default Order;