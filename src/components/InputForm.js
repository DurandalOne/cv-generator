import GeneralInfo from "./GeneralInfo";
import PracticalExp from "./PracticalExp";
import EduExp from "./EduExp";

const InputForm = (props) => {
  return (
    <div className="inputForm">
      <div className="generalInfo">
        <h2>Personal Details</h2>
        <GeneralInfo
          changeHandler={props.changeHandler}
          key={props.allValues.id}
          allValues={props.allValues}
        />
      </div>

      <hr className="solid"></hr>

      {/* PracticalValues and eduValues loop though all the current objects using a map function
           assigning the current id value as the key React needs  */}

      <div className="practicalValues">
        <h2>Work Experience</h2>
        {props.practicalValues.length ? (
          props.practicalValues.map((practicalValues, index) => (
            <div key={practicalValues.id} className="practicalClass">
              <PracticalExp
                getPracticalValues={props.getPracticalValues}
                onDelete={props.deletePracticalExp}
                onAdd={props.addNewPracticalExp}
                index={index}
                id={practicalValues.id}
                practicalValues={practicalValues}
              />
            </div>
          ))
        ) : (
          <button className="addBtn" onClick={props.addNewPracticalExp}>
            Add
          </button>
        )}
      </div>

      <hr className="solid"></hr>

      <div className="eduValues">
        <h2>Education</h2>
        {props.eduValues.length ? (
          props.eduValues.map((eduValues, index) => (
            <div key={eduValues.id} className="eduClass">
              <EduExp
                getEduValues={props.getEduValues}
                onDelete={props.deleteEduExp}
                onAdd={props.addNewEduExp}
                index={index}
                id={eduValues.id}
                eduValues={eduValues}
              />
            </div>
          ))
        ) : (
          <button className="addBtn" onClick={props.addNewEduExp}>
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default InputForm;
