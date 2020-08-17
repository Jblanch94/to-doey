import React from 'react';

const FormButton = ({ buttonName }) => {
  return (
    <button className="button is-primary is-large mt-3 is-rounded">
      {buttonName}
    </button>
  );
};

export default FormButton;
