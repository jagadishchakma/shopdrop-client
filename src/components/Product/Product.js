import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { UserContext } from '../../App';
import Spinner from '../Spinner/Spinner';
import './Product.css';


const Product = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [product, setProduct] = useState({});
    const {_id, name, weight, price, photo} = product;
    const [loading, setLoading] = useState(false);
    const [showCart, setShowCart] = useState(false);
    const {id} = useParams();
    const history = useHistory();
    useEffect(() => {
        setLoading(true);
        fetch('https://pumpkin-crisp-14693.herokuapp.com/product/'+id, {
            method: 'GET',
        })
        .then(res => res.json())
        .then(products => {
            setProduct(products[0]);
            setLoading(false);
            
        })
    },[id]);
    
    useEffect(() => {
        const cart = localStorage.getItem(loggedInUser.email);
    
        if(cart){
            const data= JSON.parse(cart);
            const cartId = data.find(data => data.id === _id);
            if(cartId){
                setShowCart(true);
            }else{
                setShowCart(false);
            }
        }else{
            setShowCart(false);
        }
    },[_id, loggedInUser]);
    

    const addCartProdcut = () => {
        const cart = localStorage.getItem(loggedInUser.email);
        if(cart){
            const items = JSON.parse(cart);

            const productItems = JSON.stringify([...items, {id: _id}]);

            localStorage.setItem(loggedInUser.email,productItems);
            setLoggedInUser({...loggedInUser});
            setShowCart(true);
            console.log(productItems);
            
        }else{
            const productItems = JSON.stringify([{id: _id}]);
            localStorage.setItem(loggedInUser.email,productItems);
            setShowCart(true);
            setLoggedInUser({...loggedInUser});
        }
    };
    const goToCart = () => {
        history.push('/checkout');
    }
    document.title = name;
    return (
        <div className="product-view">
            {
                loading ? <div className="loading"><Spinner/></div> : <div className="row">
                <div className="col-md-5">
                    <div className="p-thumb">
                        <img src={photo} alt=""/>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="p-info">
                        <h2>{name}</h2>
    
                        <h3>🟢 ${price}</h3>
                        <h3>🟢 {weight}gm</h3>
                        {
                            showCart ? <button className="btn btn-success add-to-cart" onClick={goToCart}><FontAwesomeIcon icon={faShoppingCart}/> Go To Cart</button> : <button className="btn btn-success add-to-cart" onClick={addCartProdcut}><FontAwesomeIcon icon={faShoppingCart}/> Add To Cart</button>
                        }
                        
                    </div>
                </div>
            </div>
            }
    
        </div>
    );
};

export default Product;