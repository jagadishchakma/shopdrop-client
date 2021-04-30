import React from 'react';

const OrderList = (props) => {
    const {name, price, orderDate, photo} = props.product;
    return (
       <div className="order-p">
           <div className="row">
                <div className="col-md-5">
                    <img src={photo} width="300" alt=""/>
                </div>
                <div className="col-md-7">
                    <h3>{name}</h3>
                    <h3>${price}</h3>
                    <h3>Order Date: {orderDate}</h3>
                </div>
            </div>
            <hr/>
       </div>
    );
};

export default OrderList;