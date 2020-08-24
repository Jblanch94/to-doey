import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.css';

const Sidebar = (props) => {
  return (
    <div className="sidebar">
      <Link>List1</Link>
      <Link>List2</Link>
    </div>
  );
};

export default Sidebar;
