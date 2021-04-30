import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';


const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [count, setCount] = useState(null);
    const [show, setShow] = useState(false);

    
    useEffect(() => {
        const cart = localStorage.getItem(loggedInUser.email);
        if(cart){
            const data= JSON.parse(cart);
            setCount(data.length);
        }else{
            setCount(null);
        }
    },[loggedInUser]);
   
    const logOutShow = () => {
        setShow(!show);
    }
    const logOut = () => {
        setShow(!show);
        setLoggedInUser({});
        sessionStorage.removeItem('user');
    }

    
    return (
        <header>
            <Navbar expand="lg">
                <Navbar.Brand as={Link} to="/">SHOPDROP</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/" className="site-nav-link mr-4">Home</Nav.Link>
                        <Nav.Link as={Link} to="/orders" className="site-nav-link mr-4">Orders</Nav.Link>
                        <Nav.Link as={Link} to="/admin" className="site-nav-link mr-4">Admin</Nav.Link>
                        <Nav.Link as={Link} to="/deals" className="site-nav-link mr-4">Deals</Nav.Link>
                        {
                            loggedInUser.email ? <Nav.Link className="site-nav-link mr-4 profile">
                                <img className="rounded-circle" src={loggedInUser.photoUrl} onClick={logOutShow} width="30" height="30"  alt=""/>
                                {
                                    show ? <button className="btn" onClick={logOut}>Log Out</button> : ''
                                }
                            </Nav.Link> : <Nav.Link as={Link} to="/login"><button className="btn btn-success">Login</button></Nav.Link>
                        }
    
                        <Nav.Link as={Link} to="/checkout" className="site-nav-link mr-4 checkout-count">
                            <FontAwesomeIcon icon={faShoppingCart} className="cart"/>
                            {
                                count ? <span className="count">{count}</span> : ''
                            }
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;