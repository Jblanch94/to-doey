import React, { useState } from 'react';
import { connect } from 'react-redux';

import './NewTodo.css';
import { addTodo } from '../../actions';

const NewTodo = ({ id, addTodo }) => {
  const [newTodo, setNewTodo] = useState('');

  const onInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const onFormSubmit = (e) => {
    //prevent page from loading
    e.preventDefault();

    //call action creator with data to add a new todo
    addTodo(parseInt(id), { description: newTodo });

    //clear the input
    setNewTodo('');
  };

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-group mx-3">
        <label htmlFor="new-todo" id="new-todo" name="new-todo" />
        <input
          placeholder="Enter todo..."
          id="new-todo"
          className="form-control"
          type="text"
          onChange={onInputChange}
          value={newTodo}
        />
        <button className="btn mt-3 button" type="submit">
          Add Todo
        </button>
        <hr></hr>
      </div>
    </form>
  );
};

export default connect(null, { addTodo })(NewTodo);
