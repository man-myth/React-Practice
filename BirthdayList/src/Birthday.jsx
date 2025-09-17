import { useState } from "react";
import data from "./data.js";

const Birthday = () => {
  let [birthdays, setBirthday] = useState(data);

  let clearList = () => {
    setBirthday([]);
  };
  return (
    <main style={{ "flex-direction": "column" }}>
      <div className="container">
        <h3>{birthdays.length} Birthdays today</h3>
        {birthdays.map((bday) => {
          let { id, name, age, image } = bday;
          return (
            <div key={id} className="person">
              <img src={image} alt={name} className="img"></img>
              <div>
                <h4>{name}</h4>
                <p> {age} yrs old</p>
              </div>
            </div>
          );
        })}
        <button className="btn" onClick={clearList}>
          {" "}
          Clear List
        </button>
      </div>
    </main>
  );
};
export default Birthday;
