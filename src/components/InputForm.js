import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import PracticalExp from "./PracticalExp";
import EduExp from "./EduExp";
import uniqid from "uniqid";

const InputForm = () => {
  const [allValues, setAllValues] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    PhoneNumber: "",
    Email: "",
    DoB: "",
    Describe: "",
    PracticalExp: [],
  });

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  const getPracticalValues = (items) => {
    // setAllValues({ ...setAllValues.PracticalExp, items });
    console.log(items)
  };

  return (
    <div>
      <GeneralInfo changeHandler={changeHandler} />
      <PracticalExp getAllValues={getPracticalValues} id={uniqid()} />
      <EduExp changeHandler={changeHandler} />
    </div>
  );
};

export default InputForm;
