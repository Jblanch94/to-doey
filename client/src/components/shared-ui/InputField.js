import React from 'react';

const InputField = ({
  label,
  inputName,
  inputType,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <div className="field mt-5">
      <label className="label is-large">{label}</label>
      <div className="control">
        <input
          className="input is-large is-rounded"
          name={inputName}
          type={inputType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default InputField;
