import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./../actions";
import { Helmet } from "react-helmet";

const UsersList = ({ users, fetchUsers, staticContext = {} }) => {
  useEffect(() => {
    if (!window.INITIAL_STATE) fetchUsers();
    else delete window.INITIAL_STATE;
  }, []);
  function renderUsers() {
    return users.map(user => {
      return (
        <div className="col s12 l4" key={user.id}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src="https://www.freecodecamp.org/news/content/images/2019/07/guillaume-fischer--JPCZcxeqzM-unsplash.jpg"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {user.name}
                <i className="material-icons right">more_vert</i>
              </span>
              <p>
                <a href="#">Choose</a>
              </p>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">
                Card Title<i className="material-icons right">close</i>
              </span>
              <p>
                Here is some more information about this product that is only
                revealed once clicked on.
              </p>
            </div>
          </div>
        </div>
      );
    });
  }
  function head() {
    return (
      <Helmet>
        <title>{`${users.length} Users Loaded`}</title>
        <meta property="og:title" content="Users App" />
      </Helmet>
    );
  }
  return (
    <div className="container xl" style={{ paddingTop: 30 }}>
      {head()}
      <div className="row">{renderUsers()}</div>
    </div>
  );
};
const mapStateToProps = state => ({
  users: state.users
});
const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers())
});

const loadData = store => {
  return store.dispatch(fetchUsers());
};

export default {
  loadData,
  component: connect(mapStateToProps, mapDispatchToProps)(UsersList)
};
