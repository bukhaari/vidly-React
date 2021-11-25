import React, { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
import Select from './select';

class Form extends Component {
    state ={
        data: {},
        errors:{},
    }

  validate = () => {
    const options = {abortEarly: false}
    const{ error } = Joi.validate(this.state.data, this.schema, options);

     if(!error) return null;

     const errors ={};
     for(let item of error.details)
          errors[item.path[0]] = item.message;
      
      return errors;

  };

  validateProperty = ({value, name}) => {
    const obj = {[name]: value};
    const schema = { [name]: this.schema[name]}
     const {error} = Joi.validate(obj, schema)
     return error? error.details[0].message : null;
  };

  handleChange = ({currentTarget: input}) => {
    const errors = {...this.state.errors} 
    const errorMessage = this.validateProperty(input)
    if(errorMessage) errors[input.name] = errorMessage;
    else delete errors[input.name];

    const data = {...this.state.data}
    data[input.name] = input.value;

    this.setState({ data, errors});
 };

 handleSubmit = e => {
    e.preventDefault();

     const errors = this.validate();
     this.setState({errors: errors || {}});
     if(errors) return;

     this.doSubmit()
    };

    renderInput(name, label, type = "text"){
        const {data, errors } = this.state;
        return(
            <Input 
            name={name} 
            label={label}
            error={errors[name]} 
            value={data[name]} 
            type={type}
            onChange={this.handleChange} 
            />
        );
    };
    
    renderSelect(name, label, options){
        const {data, errors } = this.state;

        return(
            <Select 
            name={name}
            value={data[name]}
            label={label}
            options={options}
            onChange={this.handleChange}
            error={errors[name]}
            />
        );    
    }

    renderButton(label, color ) {
        return (
             <button disabled={this.validate()} type="submit" className={`btn form-control btn-md btn-${color}`}>{label}</button>
        );
    };


};

export default Form