import React, { Component } from "react";
import Input from "./input";
import Joi from "joi-browser";

class Form extends Component {
  state = {
    data: {},
    error: {},
  };

  validate = () => {
    const options = { abortEarly: false };
    // const result = Joi.validate(this.state.data, this.schema, options);
    const { error } = Joi.validate(this.state.data, this.schema, options);

    if (!error) return null;

    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;

    return errors;
    // console.log(result);
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    // console.log(result);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const error = this.validate();
    this.setState({ error: error || {} });
    if (error) return;

    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const error = { ...this.state.error };
    const errorMessage = this.validateProperty(input);
    if (errorMessage) error[input.name] = errorMessage;
    else delete error[input.name];

    const data = { ...this.state.data };
    data[input.name] = input.value;
    this.setState({ data, error });
  };

  renderButton = (label) => {
    return (
      <button type="submit" disabled={this.validate()}>
        {label}
      </button>
    );
  };

  renderInput = (name, label, type = "text", placeholder, textUnder) => {
    const { error, data } = this.state;

    return (
      <Input
        label={label}
        name={name}
        error={error[name]}
        onChange={this.handleChange}
        value={data[name]}
        type={type}
        placeholder={placeholder || label}
        textUnder={textUnder}
      />
    );
  };
}

export default Form;
