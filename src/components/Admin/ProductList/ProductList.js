import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useHistory } from 'react-router';


const ProductList = (props) => {
    const {_id, name, weight, price} = props.product;
    const deleteConfirm = props.deleteConfirm;
    const history = useHistory();

    const editProduct = (id) => {
        history.push('/product/edit/'+id);
    }
    return (
        <tr>
            <th scope="row" className="text-left">{name}</th>
            <td>{weight}</td>
            <td>${price}</td>
            <td><button className="p-edit" onClick={() => editProduct(_id)}><FontAwesomeIcon icon={faEdit}/></button><button className="p-delete" onClick={() => deleteConfirm(_id)}><FontAwesomeIcon icon={faTrashAlt}/></button></td>
        </tr>
    );
};

export default ProductList;