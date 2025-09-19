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
        return (
          <div key={user.id} className="users">
            <img src={user.avatar_url} alt={user.login}></img>
            <div>
              <h5>{user.login}</h5>
              <a href={user.html_url}>Profile</a>
            </div>
          </div>
        );
      })}
    </article>
  );
};
export default FetchData;
