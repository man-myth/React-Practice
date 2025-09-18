import { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setpeople] = useState(data);

  function deleteOne(name) {
    setpeople(people.filter((person) => person.name != name));
  }

  function deleteAll() {
    setpeople([]);
  }
  return (
    <div>
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
            <button
              className="btn"
              onClick={() => deleteOne(person.name)}
              type="button"
            >
              delete
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={deleteAll} type="button">
        Delete all
      </button>
    </div>
  );
};

export default UseStateArray;
