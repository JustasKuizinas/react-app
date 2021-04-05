import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import './FormInput.scss';
import { BiCalendar } from 'react-icons/bi';

const FormInput: React.FC<any> = ({ label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  function hasError(){
    return meta.touched && meta.error;
  }

  let wrapperClasses = `form-inpt ${hasError()?'has-error':''}`

  return (
      <div className={wrapperClasses} >
      <label>
        {label}
      </label> 
      <input {...field} {...props} />
      <BiCalendar className="form-inpt__calendar"></BiCalendar>
      <div className="form-inpt__error">
      {hasError() ? meta.error: null}  
      </div>
      </div>
  );
};


export default FormInput;
