import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../actions';
import './ListContent.css';

import Sidebar from '../ui-components/Sidebar/Sidebar';

const ListContent = ({ fetchLists, lists }) => {
  useEffect(() => {
    fetchLists();
  }, [fetchLists]);

  return (
    <Fragment>
      <Sidebar lists={lists} />

      <div className="list-content">
        <h1>Content</h1>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, { fetchLists })(ListContent);
