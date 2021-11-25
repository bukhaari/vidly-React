import Joi from "joi-browser";
import React from "react";
import Form from "./common/form";

class Register extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("E-mail"),
    password: Joi.string().required().label("Password").min(5).alphanum(),
    name: Joi.string().required().label("Name"),
  };

  doSubmit = () => {
    console.log("Created A new Account");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-6">
            {this.renderInput("email", "E-mail", "email")}
          </div>
          <div className="col-6">
            {this.renderInput("password", "Password", "password")}
          </div>
          <div className="col-6">
            {this.renderInput("name", "Name", "text")}
          </div>
        </div>
        {this.renderButton("Register", "primary")}
      </form>
    );
  }
}

export default Register;
