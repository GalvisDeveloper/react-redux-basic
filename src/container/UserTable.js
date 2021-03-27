import React from "react";

const UserTable = ({ users }) => {
  return (
    <>
      {users.map((usr) => (
        <tr key={usr.id}>
          <td>{usr.name}</td>
          <td>{usr.email}</td>
          <td>
            <a href={usr.website}>{usr.website}</a>
          </td>
        </tr>
      ))}
    </>
  );
};

export default UserTable;
