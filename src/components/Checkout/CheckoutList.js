import React from 'react';

const CheckoutList = (props) => {
    const {name, price} = props.product;
    return (
        <tr>
            <th scope="row">{name}</th>
            <td className="text-center">{1}</td>
            <td className="text-center">${price}</td>
        </tr>
    );
};

export default CheckoutList;