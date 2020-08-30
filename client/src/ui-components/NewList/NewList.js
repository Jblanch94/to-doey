import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addList } from '../../actions';

import './NewList.css';

const NewList = (props) => {
  const [input, setInput] = useState({ listName: '' });

  function onInputChange(e) {
    setInput({ listName: e.target.value });
  }

  function onIconClick() {
    const input = document.getElementById('newList');
    input.focus();
  }

  function onFormSubmit(e) {
    e.preventDefault();
    props.addList(input);

    //reset input
    setInput({ listName: '' });
  }

  return (
    <div className="new-list__container">
      <i className="fas fa-plus" onClick={onIconClick}></i>
      <form onSubmit={onFormSubmit}>
        <input
          id="newList"
          name="newList"
          type="text"
          value={input.listName}
          onChange={onInputChange}
        />
      </form>
    </div>
  );
};

export default connect(null, { addList })(NewList);
