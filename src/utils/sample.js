// // import React, { Component, Children } from "react";
// // import Input from "./input";

// class Form extends Component {
//   state = {
//     data: {},
//     error: {},
//   };

//   validate = () => {
//     const error = {};
//     const { data } = this.state;

//     if (data.username.trim() == "") error.username = "Username is required";
//     if (data.password.trim() == "") error.password = "Password is required";

//     return Object.keys(error).length === 0 ? null : error;
//   };

//   validateProperty = ({ name, value }) => {
//     if (name === "username")
//       if (value.trim() === "") return "Username is required";
//     if (name === "password")
//       if (value.trim() === "") return "Password is required";
//     if (name === "firstName")
//       if (value.trim() === "") return "First Name is required";
//     if (name === "lastName")
//       if (value.trim() === "") return "Last Name is required";
//     if (name === "email") if (value.trim() === "") return "Email is required";
//   };

//   handleSubmit = (e) => {
//     e.preventDefault();

//     const error = this.validate();
//     this.setState({ error: error || {} });
//     if (error) return;

//     this.doSubmit();
//   };

//   handleChange = ({ currentTarget: input }) => {
//     const error = { ...this.state.error };
//     const errorMessage = this.validateProperty(input);
//     if (errorMessage) error[input.name] = errorMessage;
//     else delete error[input.name];

//     const data = { ...this.state.data };
//     data[input.name] = input.value;
//     this.setState({ data, error });
//   };

//   renderButton = (label) => {
//     return (
//       <button type="submit" disabled={false}>
//         {label}
//       </button>
//     );
//   };

//   renderInput = (name, label, type = "text", placeholder, textUnder) => {
//     const { error, data } = this.state;

//     return (
//       <Input
//         label={label}
//         name={name}
//         error={error[name]}
//         onChange={this.handleChange}
//         value={data[name]}
//         type={type}
//         placeholder={placeholder || label}
//         textUnder={textUnder}
//       />
//     );
//   };
// }

// export default Form;
