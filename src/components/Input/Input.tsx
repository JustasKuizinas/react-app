import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

const Input: React.FC<any> = props => {
  let [value, setValue] = useState('');

  useEffect(() => {
    setValue(props.value);
  }, []);

  function onChange(e) {
    setValue(e.target.value);
    props.onChange(e);
  }
  return (
    <div className={'inpt ' + props.style}>
      <input
        value={value}
        type={props.type}
        placeholder={props.placeholder}
        onChange={onChange}
        onKeyDown={props.onKeyDown}
      />
    </div>
  );
};

Input.defaultProps = {
  value: '',
  style: '',
  type: 'text',
  placeholder: '',
  onChange: () => {},
  onKeyDown: () => {},
};

export default Input;
