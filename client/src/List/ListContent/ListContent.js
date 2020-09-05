import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import './ListContent.css';
import { fetchTodos } from '../../actions';

import Sidebar from '../../ui-components/Sidebar/Sidebar';
import Todos from '../Todos/Todos';

const ListContent = ({ lists, match, fetchTodos, todos }) => {
  useEffect(() => {
    fetchTodos(match.params.id);
  }, [fetchTodos, match.params.id]);

  return (
    <Fragment>
      <div className="sidebar-container">
        <Sidebar lists={lists} />
      </div>

      <div className="list-content">
        <Todos lists={lists} id={match.params.id} todos={todos} />
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos })(ListContent);
