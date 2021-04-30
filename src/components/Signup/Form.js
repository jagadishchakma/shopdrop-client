import React from 'react';

const Form = (props) => {
    const {handleCreateUser, handleChange, error, success, loading} = props;
    return (
        <form onSubmit={handleCreateUser}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" className={error.name ? "form-control is-valid" : "form-control is-invalid"} name="name" aria-describedby="nameHelp" onChange={handleChange} required/>
                <small id="nameHelp" className="form-text text-muted">Name must be at least 5 character</small>
            </div>
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className={error.email ? "form-control is-valid" : "form-control is-invalid"} name="email" aria-describedby="nameHelp" onChange={handleChange} required/>
                <small id="emailHelp" className="form-text text-muted">Enter a valid mail(gmail,yahoo,email,info)</small>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className={error.password ? "form-control is-valid" : "form-control is-invalid"} name="password" aria-describedby="passHelp" onChange={handleChange} required/>
                <small id="passHelp" className="form-text text-muted">Password must be at least 6 character with number, uppercase, lowercase</small>
            </div>
            <div className="form-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" className={error.confirmPass ? "form-control is-valid" : "form-control is-invalid"} name="confirmPass" onChange={handleChange}  required/>
            </div>
            <div className="result">
                {
                   ( success === true) ? <p className="alert alert-success text-center">Successfully Created ✔✔</p>
                    : <p className="alert-warning text-center">{success}</p>
                }
            </div>
            <div className="form-group">
                 <button type="submit" className="btn btn-success btn-block">
                    {
                        loading ? <div className="spinner-border" role="status"></div> : "Submit"
                    }
                </button>
            </div>
        </form>
    );
};

export default Form;