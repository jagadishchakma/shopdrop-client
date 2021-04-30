import React from 'react';
import { useHistory } from 'react-router';
import './Products.css';
const Products = (props) => {
    const {_id, name, price, photo} = props.product;
    const history = useHistory();
    const productView = (id) => {
        history.push('/product/view/'+id);
    }
    return (
        <div className="col-md-4 col-sm-6 col-lg-4">
            <div className="product">
                <div className="card">
                    <div className="card-header">
                        <img src={photo} alt=""/>
                    </div>
                    <div className="card-body">
                        <h4>{name}</h4>
                    </div>
                    <div className="card-footer">
                        <h2>${price}</h2>
                        <button className="btn btn-success" onClick={() => productView(_id)}>Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;