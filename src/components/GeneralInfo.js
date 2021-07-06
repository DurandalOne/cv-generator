import React from "react";

const GeneralInfo = (props) => {
  const allValues = props.allValues;

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="FirstName"
          onChange={props.changeHandler}
          value={allValues.FirstName}
        ></input>
        <input
          type="text"
          placeholder="Last Name"
          name="LastName"
          onChange={props.changeHandler}
          value={allValues.LastName}
        />
        <input
          type="text"
          placeholder="Position"
          name="Position"
          onChange={props.changeHandler}
          value={allValues.Position}
        />
        <input
          type="text"
          placeholder="Address"
          name="Address"
          onChange={props.changeHandler}
          value={allValues.Address}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="PhoneNumber"
          onChange={props.changeHandler}
          value={allValues.PhoneNumber}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          onChange={props.changeHandler}
          value={allValues.Email}
        />
        <input
          type="textarea"
          cols={3}
          placeholder="Description"
          name="Description"
          onChange={props.changeHandler}
          value={allValues.Description}
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
