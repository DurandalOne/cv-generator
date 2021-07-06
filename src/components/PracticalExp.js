const PracticalExp = (props) => {
  const changeHandler = (e) => {
    props.getPracticalValues(e, props.index);
  };
  const practicalValues = props.practicalValues;
  return (
    <form>
      <input
        type="text"
        placeholder="Position"
        name="Position"
        onChange={changeHandler}
        value={practicalValues.Position}
      />
      <input
        type="text"
        placeholder="Company"
        name="Company"
        onChange={changeHandler}
        value={practicalValues.Company}
      />
      <input
        type="text"
        placeholder="From"
        name="From"
        onChange={changeHandler}
        value={practicalValues.From}
      />
      <input
        type="text"
        placeholder="To"
        name="To"
        onChange={changeHandler}
        value={practicalValues.To}
      />
      <input
        type="text"
        placeholder="Description"
        name="Description"
        onChange={changeHandler}
        value={practicalValues.Description}
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

export default PracticalExp;
