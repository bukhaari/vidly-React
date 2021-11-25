import Joi from "joi-browser";
import React from "react";
import Form from './common/form';
import {Link} from 'react-router-dom';

class LogForm extends Form {
  state ={
      data: {username: '', password: ''},
      errors:{},
  }

    username = React.createRef();
    
    schema ={
        username: Joi.string().required().label("Username is required and"),
        password: Joi.string().required().label("Password"),
    };

    doSubmit = () => {
        // call sever
        console.log("submited")
     };

    render() {
       
        return (
            <div>
                <h1>Loging form </h1>
               <form onSubmit={this.handleSubmit}>
                   <div className="ml-5 mr-5"> 
                        {this.renderInput("username", "Username")}
                        {this.renderInput("password", "Password", "password")}
                        {this.renderButton("Login", "primary")}
                   </div>
               </form>
            </div>
        );
    }
}

export default LogForm;