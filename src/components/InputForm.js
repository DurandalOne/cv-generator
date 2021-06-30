import React, { useState } from "react";
import GeneralInfo from "./GeneralInfo";
import PracticalExp from "./PracticalExp";
import EduExp from "./EduExp";
import uniqid from "uniqid";

const InputForm = () => {
  /////////
  const [allValues, setAllValues] = useState({
    FirstName: "",
    LastName: "",
    Address: "",
    PhoneNumber: "",
    Email: "",
    DoB: "",
    Describe: "",
  });

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  /////////
  const [practicalValues, setPracticalValues] = useState([
    {
      Position: "",
      Company: "",
      City: "",
      To: "",
      From: "",
      id: uniqid(),
    },
    {
      Position: "",
      Company: "",
      City: "",
      To: "",
      From: "",
      id: uniqid(),
    },
  ]);

  const getPracticalValues = (event, index) => {
    const values = [...practicalValues];
    values[index][event.target.name] = event.target.value;
    setPracticalValues(values);
  };

  const addNewPracticalExp = (e) => {
    e.preventDefault();
    setPracticalValues([
      ...practicalValues,
      {
        Position: "",
        Company: "",
        City: "",
        To: "",
        From: "",
        id: uniqid(),
      },
    ]);
  };

  const deletePracticalExp = (e) => {
    e.preventDefault();
    const values = [...practicalValues];
    values.splice(
      values.findIndex((value) => value.id === e.target.id),
      1
    );
    setPracticalValues(values);
  };

  /////////
  const [eduValues, setEduValues] = useState([
    {
      School: "",
      Qulification: "",
      Subject: "",
      From: "",
      To: "",
      id: uniqid(),
    },
  ]);

  const getEduValues = (event, index) => {
    const values = [...eduValues];
    values[index][event.target.name] = event.target.value;
    setEduValues(values);
  };

  const addNewEduExp = (e) => {
    e.preventDefault();
    setEduValues([
      ...eduValues,
      {
        School: "",
        Qulification: "",
        Subject: "",
        From: "",
        To: "",
        id: uniqid(),
      },
    ]);
  };

  const deleteEduExp = (e) => {
    e.preventDefault();
    const values = [...eduValues];
    values.splice(
      values.findIndex((value) => value.id === e.target.id),
      1
    );
    setEduValues(values);
  };

  return (
    <div>
      <div>
        <GeneralInfo changeHandler={changeHandler} />
      </div>
      {practicalValues.map((practicalValues, index) => (
        <div key={practicalValues.id}>
          <PracticalExp
            getPracticalValues={getPracticalValues}
            onAdd={addNewPracticalExp}
            onDelete={deletePracticalExp}
            index={index}
            id={practicalValues.id}
          />
        </div>
      ))}
      {eduValues.map((eduValues, index) => (
        <div key={eduValues.id}>
          <EduExp
            getEduValues={getEduValues}
            onAdd={addNewEduExp}
            onDelete={deleteEduExp}
            index={index}
            id={eduValues.id}
          />
        </div>
      ))}
    </div>
  );
};

export default InputForm;
