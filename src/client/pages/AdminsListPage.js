import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "./../actions";
import requireAuth from "./../components/hocs/requireAuth";

const AdminsList = ({ admins, fetchAdmins }) => {
  useEffect(() => {
    fetchAdmins();
  }, []);

  function renderAdmins() {
    return admins.map(admin => {
      return (
        <div className="col s12 l4" key={admin.id}>
          <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
              <img
                className="activator"
                src="https://www.freecodecamp.org/news/content/images/2019/07/guillaume-fischer--JPCZcxeqzM-unsplash.jpg"
              />
            </div>
            <div className="card-content">
              <span className="card-title activator grey-text text-darken-4">
                {admin.name}
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
  return (
    <div className="container xl" style={{ paddingTop: 30 }}>
      <div className="row">{renderAdmins()}</div>
    </div>
  );
};
const mapStateToProps = ({ admins }) => ({
  admins
});
const mapDispatchToProps = dispatch => ({
  fetchAdmins: () => dispatch(fetchAdmins())
});

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(requireAuth(AdminsList)),
  loadData: ({ dispatch }) => {
    return dispatch(fetchAdmins());
  }
};
