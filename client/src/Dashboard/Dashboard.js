import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchLists } from '../actions';
import './Dashboard.css';

import Sidebar from '../ui-components/Sidebar/Sidebar';

const Dashboard = ({ fetchLists, lists }) => {
  function renderCards() {
    return lists.map((list) => {
      return (
        <Fragment key={list.todo_list_id}>
          <div className="card card-style mt-5">
            <div className="card-body">
              <h5 className="card-title">{list.todo_list_name}</h5>
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </Fragment>
      );
    });
  }
  useEffect(() => {
    fetchLists();
  }, []);
  return (
    <Fragment>
      <section id="dashboard">
        <Sidebar />
        <h1 className="mt-5">Todo Lists</h1>

        {/* {renderCards()} */}
        {/* <button type="button" className="btn btn-primary mt-3">
          Open Modal
        </button> */}
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
