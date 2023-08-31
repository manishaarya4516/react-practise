import React, { useEffect, useState } from "react";
const url = "https://api.github.com/users";

export const FinalUseffect = () => {
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <h3>github users</h3>
      <ul>
        {users
          ? users.map((user) => {
              const { id, login, avatar_url, html_url, repos_url } = user;
              return (
                <li
                  key={id}
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "10px",
                    border: "1px solid black",
                    width: "400px",
                    height: "300px",
                    backgroundColor: "aliceblue",
                  }}
                >
                  <img
                    src={avatar_url}
                    alt="logo"
                    style={{
                      borderRadius: "250px",
                      height: "100px",
                      width: "100px",
                    }}
                  />
                  <h1>{login}</h1>
                  <a href="{html_url}">profile</a>
               
                  {repos_url}
                </li>
              );
            })
          : ""}
      </ul>
    </div>
  );
};
