import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import Search from '../Search/Search';
import Spinner from '../Spinner/Spinner';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://pumpkin-crisp-14693.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
    },[]);
    document.title = 'Shopdrop online shopping ecommarce site'
    return (
        <div className="home">
            <Search/>
            <div className="products">
                <div className="row">
                    {
                        loading ? <Spinner/> : 
                        products.map(product => <Products product={product} key={product._id}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;