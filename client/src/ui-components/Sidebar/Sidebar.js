import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import NewList from '../../List/NewList/NewList';

const Sidebar = ({ lists }) => {
  function renderLists() {
    return lists.map((list) => {
      return (
        <div className="list-container" key={list.todo_list_id}>
          <Link to={`/${list.todo_list_id}`}>{list.todo_list_name}</Link>
        </div>
      );
    });
  }

  return (
    <div className="sidebar">
      {renderLists()}
      <NewList />
    </div>
  );
};

export default Sidebar;
