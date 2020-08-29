import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = ({ lists }) => {
  function renderContent() {
    return lists.map((list) => {
      return (
        <Link key={list.todo_list_id} to={`/${list.todo_list_id}`}>
          {list.todo_list_name}
        </Link>
      );
    });
  }

  return <div className="sidebar">{renderContent()}</div>;
};

export default Sidebar;
