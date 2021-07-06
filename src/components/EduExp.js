const EduExp = (props) => {
  const changeHandler = (e) => {
    props.getEduValues(e, props.index);
  };

  const eduValues = props.eduValues;

  return (
    <form>
      <input
        type="text"
        placeholder="School"
        name="School"
        onChange={changeHandler}
        value={eduValues.School}
      />
      <input
        type="text"
        placeholder="Subject"
        name="Subject"
        onChange={changeHandler}
        value={eduValues.Subject}
      />
      <input
        type="text"
        placeholder="From"
        name="From"
        onChange={changeHandler}
        value={eduValues.From}
      />
      <input
        type="text"
        placeholder="To"
        name="To"
        onChange={changeHandler}
        value={eduValues.To}
      />
      <input
        type="text"
        placeholder="Details"
        name="Details"
        onChange={changeHandler}
        value={eduValues.Details}
      />
      <div className="buttons">
        <button className="delBtn" onClick={props.onDelete} id={props.id}>
          Delete
        </button>
        <button className="addBtn" onClick={props.onAdd}>
          Add
        </button>
      </div>
    </form>
  );
};

export default EduExp;
