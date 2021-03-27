// import axios from "axios";
import React, { Component } from "react";
import UserTable from "../container/UserTable";
import { getUsers } from "../services/http/getUsers";


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const getUsersAxios = await getUsers();
    const { data } = getUsersAxios;
    this.setState({ users: data });
  }

  render() {
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
            <UserTable users={this.state.users} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;
