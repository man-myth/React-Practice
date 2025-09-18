import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <article>
      <div className="container">
        <h2>Github Users</h2>
      </div>
      {users.map((user) => {
        return <div className="user"></div>;
      })}
    </article>
  );
};
export default FetchData;
