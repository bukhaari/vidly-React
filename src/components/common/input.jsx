import React from 'react';

const Input = ({name,label, error, ...rest}) => {
    return (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
        name={name}
        id={name} 
        placeholder={label}
        {...rest}
        className="form-control"  
        autoFocus 
        // value={value}
        // type={type}
        // onChange={onChange}
        // required
        />
         {/* <div className="valid-feedback">Valid.</div>
         <div className="invalid-feedback">fadlan wax soo dali.</div> */}
        {error && <div className="alert alert-danger">{error}</div>}
    </div>
    );
};

export default Input;