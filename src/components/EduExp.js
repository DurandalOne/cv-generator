import React, { useState } from "react";

const EduExp = (props) => {
  const [allValues, setAllValues] = useState({
    School: "",
    Qulification: "",
    Subject: "",
    From: "",
    To: "",
  });

  const changeHandler = (e) => {
    setAllValues({
      ...allValues,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="School"
          name="School"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Qulification"
          name="Qualification"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="Subject"
          name="Subject"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="From"
          name="From"
          onChange={changeHandler}
        />
        <input
          type="text"
          placeholder="To"
          name="To"
          onChange={changeHandler}
        />
      </form>
    </div>
  );
};

export default EduExp;
