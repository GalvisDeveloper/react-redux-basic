import React, { Component } from "react";
import UserTable from "../container/UserTable";
import { connect } from "react-redux";
import * as userGetAll from "../actions/userActions";
import Spinner from "./Spinner";

class User extends Component {
  componentDidMount() {
    this.props.userGetAll();
  }

  render() {
    // console.log(this.props.loading);
    // console.log(this.props.error);

    return (
      <div className="margin">
        <h1>Users</h1>

        {this.props.loading ? (
          <Spinner />
        ) : (
          <table className="table">
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
        )}
      </div>
    );
  }
}

const mapStateToProps = (reducers) => {
  return reducers.userReducers;
};

export default connect(mapStateToProps, userGetAll)(User);
