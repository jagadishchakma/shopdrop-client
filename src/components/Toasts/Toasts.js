import React, { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import { UserContext } from '../../App';

const Toasts = (props) => {
    const [loggendInUser] = useContext(UserContext);
    const {show, setShow, message} = props.toasts;
    return (
        <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
            <Toast.Header>
                <img src={loggendInUser.photoUrl} className="rounded-circle mr-2" alt="" width="20" height="20"/>
                <strong className="mr-auto">{loggendInUser.name}</strong>
                <small>Just Now</small>
            </Toast.Header>
            <Toast.Body className="text-success">{message}</Toast.Body>
        </Toast> 
    );
};

export default Toasts;