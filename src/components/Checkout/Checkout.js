import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App';
import './Checkout.css';
import CheckoutList from './CheckoutList';

const Checkout = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    useEffect(() => {
        const cart = localStorage.getItem(loggedInUser.email);
        if(cart){
            const cartItems = JSON.parse(cart);
            fetch('https://pumpkin-crisp-14693.herokuapp.com/products/cart', {
                method: 'POST',
                headers: {
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(cartItems)
            })
            .then(res => res.json())
            .then(productItems => setProducts(productItems))
        }
        
    },[loggedInUser]);
    const proceedCheckOut = () => {
        const time = new Date();
        const month = time.getMonth()+1;
        const date = time.getDate();
        const year = time.getFullYear();
        const orderDate = month + '/' + date + '/' + year;

        const orderProduct = [...products];
        for(let i = 0; i < products.length; i++){
            orderProduct[i].email = loggedInUser.email;
            orderProduct[i].orderDate = orderDate;
            delete orderProduct[i]._id;
        }

        setLoading(true);
        fetch('https://pumpkin-crisp-14693.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(orderProduct)
        })
        .then(res => res.json())
        .then(data => {
            setLoading(false);
            setLoggedInUser({...loggedInUser});
            localStorage.removeItem(loggedInUser.email);
            history.push('/orders');
        })
       
    }
    const totalPrice = products.reduce((prev, next) => prev + parseInt(next.price), 0);
    document.title = 'Checkout'
    return (
        <div className="checkout">
            <h2>Checkout</h2>
           <div className="shadow p-3 mb-5 bg-white rounded">
            <table className="table table-border">
                <thead>
                    <tr>
                    <th scope="col" className="text-muted">Description</th>
                    <th scope="col" className="text-center text-muted">Quantity</th>
                    <th scope="col" className="text-center text-muted">Price</th>
                    </tr>
                </thead>
                <tbody>
                {
                    products.map(product => <CheckoutList product={product} key={product._id}/>)
                }
                <tr className="total">
                    <th scope="row">Total</th>
                    <td className="text-center">=</td>
                    <td className="text-center">${totalPrice}</td>
                </tr>
                </tbody>
            </table>
            {
                loading ? <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
                </div> : <button className="btn btn-success proceed-check" onClick={proceedCheckOut}>Checkout</button>
            }
            
           </div>
        </div>
    );
};

export default Checkout;