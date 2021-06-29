import React, { useState } from "react";
import uniqid from "uniqid";

const PracticalExp = (props) => {
  const [allValues, setAllValues] = useState({
    PracticalExp: {
      Position: "",
      Company: "",
      City: "",
      To: "",
      From: "",
      id: uniqid(),
    },
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues.PracticalExp,
      [e.target.name]: e.target.value,
    });
  };

  props.getAllValues(allValues);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Position"
          name="Position"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Company"
          name="Company"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="City"
          name="City"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="To"
          name="To"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="From"
          name="From"
          onChange={changeHandler}
        />

        <button onClick={props.add}>Add</button>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default PracticalExp;
