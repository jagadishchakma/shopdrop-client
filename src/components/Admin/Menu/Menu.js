import { faPlus, faTasks } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <div className="admin-menu">
            <ul>
                <li><Link to="/product/manage"> <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon> Manage Products</Link></li>
                <li><Link to="/product/add"> <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon> Add Product</Link></li>
            </ul>
        </div>
    );
};

export default Menu;