import React from "react";

const GeneralInfo = (props) => {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          name="FirstName"
          onChange={props.changeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          name="LastName"
          onChange={props.changeHandler}
        />
        <input
          type="file"
          placeholder="Photo"
          name="Photo"
          onChange={props.changeHandler}
        />
        <input
          type="text"
          placeholder="Address"
          name="Address"
          onChange={props.changeHandler}
        />
        <input
          type="text"
          placeholder="Phone Number"
          name="PhoneNumber"
          onChange={props.changeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          name="Email"
          onChange={props.changeHandler}
        />
        <input
          type="date"
          placeholder="Date of Birth"
          name="DoB"
          onChange={props.changeHandler}
        />
        <input
          type="text"
          placeholder="Description"
          name="Description"
          onChange={props.changeHandler}
        />
      </form>
    </div>
  );
};

export default GeneralInfo;
