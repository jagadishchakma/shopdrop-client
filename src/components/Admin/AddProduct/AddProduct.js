import React from 'react';
import Toasts from '../../Toasts/Toasts';

const AddProduct = (props) => {
    const {handleProductSubmit, handleProductChange, error, show, setShow, submit} = props.actionProps;
    const {name, weight, price, photo, loading, img} = error;
    

    return (
        <div className="add-product">
    
            <form onSubmit={handleProductSubmit}>
                <h2>Add Product</h2>
                <div className="row">
                    <div className="form-group col">
                        <label htmlFor="">Product Name</label>
                        <input type="text" onChange={handleProductChange} className={name ? "form-control is-invalid" : "form-control is-valid"} name="name" placeholder="Enter name" required={true}/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="">Weight</label>
                    <input type="number" onChange={handleProductChange} className={weight ? "form-control is-invalid" : "form-control is-valid"} name="weight" placeholder="Enter weight" required={true}/>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col">
                    <   label htmlFor="">Add Price</label>
                        <input type="number" onChange={handleProductChange} className={price ? "form-control is-invalid" : "form-control is-valid"} name="price" placeholder="Enter price" required={true}/>
                    </div>
                    <div className="form-group col">
                        <label htmlFor="">Add Photo </label> <br/>
                        {
                            loading ? <div className="spinner-grow" role="status">
                            <span className="sr-only">Loading...</span>
                          </div> : img ? <img src={img} className="rounded-circle" width="100" height="100" alt=""/> : <input type="file" onChange={handleProductChange} className={photo ? "form-control is-invalid" : "form-control is-valid"} name="photo" placeholder="Last name" required={true}/>
                        }
                        
                    
                    </div>
                </div>
                <div className="form-group">
                    {
                        show ? <Toasts toasts={{show, setShow, message: 'Successfully Product Added'}} className="float-left"/> : submit ? <div className="spinner-border text-success" role="status">
                        <span className="sr-only">Loading...</span>
                      </div> : ' '
                    }
                    
    
                    <input type="submit" className="btn btn-success float-right" value="Save" disabled={loading ? true : false}/>
                </div>
            </form>
        </div>
    );
};

export default AddProduct;