import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { updateTodoData } from '../../actions';
import './TodoInput.css';

const TodoInput = ({
  todoId,
  listId,
  description,
  updateTodoData,
  completed,
}) => {
  const [inputDescription, setInputDescription] = useState('');

  //when component is mounted need to keep track of input state locally and update it with local
  //instead of passed down state from api
  useEffect(() => {
    setInputDescription(description);
  }, [description]);

  //change input
  function onInputChange(e) {
    setInputDescription(e.target.value);
  }

  function onFormSubmit(e) {
    e.preventDefault();

    //call action creator to edit the todo
    updateTodoData(listId, todoId, { description: inputDescription });

    //after form is updated unfoucs from form
    const input = document.getElementById(`todo-${todoId}`);
    input.blur();
  }

  function getClasses() {
    if (completed) {
      return 'todo-item-complete input-todo';
    }
    return 'input-todo';
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor={`todo-${todoId}`} />
      <input
        className={getClasses()}
        type="text"
        id={`todo-${todoId}`}
        value={inputDescription}
        onChange={onInputChange}
      />
    </form>
  );
};

export default connect(null, { updateTodoData })(TodoInput);
