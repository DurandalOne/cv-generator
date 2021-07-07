import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./styles/index.css";
import InputForm from "./components/InputForm";
import CV from "./components/CV";
import NavBar from "./components/NavBar";
import uniqid from "uniqid";
import {
  defaultPersonalDetails,
  defaultWorkDetails,
  defaultEducationDetails,
  blankPersonalDetails,
  blankWorkDetails,
  blankEducationDetails,
} from "./components/DefaultValues";

const App = () => {
  //Personal Details hook
  const [allValues, setAllValues] = useState({
    ...blankPersonalDetails,
    id: uniqid(),
  });

  const changeHandler = (e) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value });
  };

  //Work Experience hook

  const [practicalValues, setPracticalValues] = useState([
    { ...blankWorkDetails, id: uniqid() },
    { ...blankWorkDetails, id: uniqid() },
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
      { ...blankWorkDetails, id: uniqid() },
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

  //Education hook

  const [eduValues, setEduValues] = useState([
    { ...blankEducationDetails, id: uniqid() },
  ]);

  const getEduValues = (event, index) => {
    const values = [...eduValues];
    values[index][event.target.name] = event.target.value;
    setEduValues(values);
  };

  const addNewEduExp = (e) => {
    e.preventDefault();
    setEduValues([...eduValues, { ...blankEducationDetails, id: uniqid() }]);
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

  //

  const enterDefaults = () => {
    setAllValues(defaultPersonalDetails);
    setPracticalValues(defaultWorkDetails);
    setEduValues(defaultEducationDetails);
  };

  const clearForm = () => {
    setAllValues({
      ...blankPersonalDetails,
      id: uniqid(),
    });
    setPracticalValues([
      { ...blankWorkDetails, id: uniqid() },
      { ...blankWorkDetails, id: uniqid() },
    ]);
    setEduValues([{ ...blankEducationDetails, id: uniqid() }]);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    copyStyles: true,
    content: () => componentRef.current,
  });

  return (
    <div className="container">
      <NavBar
        enterDefaults={enterDefaults}
        clearForm={clearForm}
        handlePrint={handlePrint}
      />
      <InputForm
        changeHandler={changeHandler}
        allValues={allValues}
        practicalValues={practicalValues}
        getPracticalValues={getPracticalValues}
        addNewPracticalExp={addNewPracticalExp}
        deletePracticalExp={deletePracticalExp}
        eduValues={eduValues}
        getEduValues={getEduValues}
        addNewEduExp={addNewEduExp}
        deleteEduExp={deleteEduExp}
      />
      <CV
        allValues={allValues}
        practicalValues={practicalValues}
        educationValues={eduValues}
        componentRef={componentRef}
      />
    </div>
  );
};

export default App;
