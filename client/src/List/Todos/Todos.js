import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { updateTodoData } from '../../actions';

import './Todos.css';
import EditTodo from '../EditTodo/EditTodo';
import TodoInput from '../TodoInput/TodoInput';

const Todo = ({ todos, lists, id, updateTodoData }) => {
  const renderTodos = () => {
    return todos.map((todo, index) => {
      return (
        <Fragment key={index}>
          <div className="d-flex">
            <i
              className={
                todo.completed
                  ? 'far fa-check-circle check-icon-completed fa-2x'
                  : 'far fa-check-circle check-icon-not-completed fa-2x'
              }
              onClick={() =>
                onClickComplete(parseInt(id), todo.todo_id, !todo.completed)
              }
            ></i>
            <li key={todo.todo_id} id={todo.todo_id}>
              <TodoInput
                completed={todo.completed}
                todoId={todo.todo_id}
                listId={parseInt(id)}
                description={todo.todo_description}
              />
            </li>
            <div className="edit-icon-container">
              <EditTodo id={todo.todo_id} />
            </div>
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

  const onClickComplete = (listId, todoId, completed) => {
    updateTodoData(listId, todoId, { completed });
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

export default connect(null, { updateTodoData })(Todo);
