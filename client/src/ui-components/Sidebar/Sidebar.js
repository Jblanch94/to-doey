import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';
import NewList from '../../List/NewList/NewList';

const Sidebar = ({ lists }) => {
  function renderLists() {
    return lists.map((list) => {
      return (
        <Link key={list.todo_list_id} to={`/${list.todo_list_id}`}>
          {list.todo_list_name}
        </Link>
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
