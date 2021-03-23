import React from "react";

const Input = ({ label, name, error, textUnder, ...rest }) => {
  return (
    <div className="input_div">
      <div className="form_top">
        <span className="formLabel"> {label} </span>
        {error && (
          <div className="error_div">
            <span className="animated fadeIn"> {error} </span>
          </div>
        )}
      </div>

      <input {...rest} name={name} />
      {textUnder && (
        <div className="below_input">
          <div className="left">
            <p>
              Retry in <span>2:00</span>
            </p>
          </div>
          <div className="right">
            <p>
              Did not get code. <span>Resend?</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Input;
