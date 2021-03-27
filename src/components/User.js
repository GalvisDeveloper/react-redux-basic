import React, { Component } from "react";
import UserTable from "../container/UserTable";
import { connect } from "react-redux";
import * as userActions from "../actions/userActions";

class User extends Component {
  componentDidMount() {
    this.props.userActions();
  }

  render() {
    console.log(this.props);
    return (
      <div className="margen">
        <h1>Users</h1>
        <table className="tabla">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Link</th>
            </tr>
          </thead>

          <tbody>
            <UserTable users={this.props.users} />
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps, userActions)(User);
