import React, { useEffect, useState } from "react";
import jsonData from "./data.json";

function LocalJsonReader() {
  const users = jsonData.USERS;

  return (
    <div>
      {users.map((user, index) => (
        <div key={index}>
          <h2>User {index + 1}</h2>
          <p>Phone: {user.phone}</p>
          <p>First Name: {user.FirstName}</p>
          <p>Last Name: {user.DateTime}</p>
        </div>
      ))}
    </div>
  );
}

export default LocalJsonReader;
