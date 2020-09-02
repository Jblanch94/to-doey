import React from 'react';

import './EditTodo.css';

const EditTodo = (props) => {
  return (
    <i
      className="fas fa-pencil-alt fa-2x icon-edit"
      onClick={() => editTodo(props.id)}
    ></i>
  );
};

function editTodo(id) {
  const currentTodo = document.getElementById(`todo-${id}`);
  currentTodo.select();
}

export default EditTodo;
