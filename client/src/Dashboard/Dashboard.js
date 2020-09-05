import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../actions';
import './Dashboard.css';

import Sidebar from '../ui-components/Sidebar/Sidebar';

const Dashboard = ({ fetchLists, lists, match }) => {
  useEffect(() => {
    fetchLists();
  }, [fetchLists]);
  return (
    <Fragment>
      <section id="dashboard">
        <Sidebar lists={lists} />
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    lists: state.lists,
  };
};

export default connect(mapStateToProps, { fetchLists })(Dashboard);
