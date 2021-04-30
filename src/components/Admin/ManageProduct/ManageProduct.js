import React, { useEffect, useState } from 'react';
import swal from 'sweetalert';
import Spinner from '../../Spinner/Spinner';
import Menu from '../Menu/Menu';
import ProductList from '../ProductList/ProductList';
import './ManageProduct.css';

const ManageProduct = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch('https://pumpkin-crisp-14693.herokuapp.com/products')
        .then((res) => res.json())
        .then((data) => {
            setProducts(data);
            setLoading(false);
        })
    },[update]);
    const deleteConfirm = (id) => {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                fetch('https://pumpkin-crisp-14693.herokuapp.com/product/delete/'+id, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type':'application/json'
                    }
                })
                .then(res => res.json())
                .then(data => {
                    setUpdate(!update);
                    swal("Product Successfully Deleted", {
                        icon: "success",
                    });
                })
                
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }
    return (
        <div>
            <Menu/>
            <div className="manage-product">
                <div className="product-lists">
                <h2>Manage Product</h2>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col">Weight</th>
                            <th scope="col">Price</th>
                            <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                loading ? <Spinner/> : products.map(product => <ProductList product={product} key={product._id} deleteConfirm={deleteConfirm}/>)
                            }
                        </tbody>
                    </table>
                
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;