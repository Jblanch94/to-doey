import React, { Fragment, useState } from 'react';

import './Todos.css';

const Todo = ({ todos, lists, id }) => {
  const [completed, setCompleted] = useState(false);

  const renderTodos = () => {
    return todos.map((todo, index) => {
      return (
        <Fragment key={index}>
          <div className="d-flex">
            <i
              className="far fa-check-circle check-icon"
              id="icon-check"
              onClick={() => onClickComplete(todo.todo_id)}
            ></i>
            <li key={todo.todo_id} className="todo-item" id={todo.todo_id}>
              {todo.todo_description}
            </li>
          </div>
          <hr className="hr-line"></hr>
        </Fragment>
      );
    });
  };

  const getListTitle = () => {
    const idNum = parseInt(id);
    const list = lists.find((el) => el.todo_list_id === idNum);
    return list.todo_list_name;
  };

  const onClickComplete = (id) => {
    const todo = document.getElementById(id);
    setCompleted(!completed);

    if (completed) {
      todo.classList.add('todo-item-complete');
    } else {
      todo.classList.remove('todo-item-complete');
    }

    //TODO: make api request to change completed status
  };

  return (
    <Fragment>
      <div className="list-title-container">
        <h1>{getListTitle()}</h1>
      </div>
      <div>
        <ul className="todo-list">{renderTodos()}</ul>
      </div>
    </Fragment>
  );
};

export default Todo;
