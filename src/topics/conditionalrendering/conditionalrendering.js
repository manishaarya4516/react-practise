import React, { useEffect, useState } from "react";

const url = "https://api.github.com/users/QuincyLarson";

export const ConditionalRendering = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("default user");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json(res))
      .then((user)=>{
        const {login}=user
        setUser(login)
        setLoading(false)
      })
      .catch((err) => console.log(err));
  },[]);
  if (loading) {
    return <div>ConditionalRendering</div>;
  }
  if (error) {
    return <h2>mmmmmmm </h2>;
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};
