const PracticalExp = (props) => {
  const changeHandler = (e) => {
    props.getPracticalValues(e, props.index);
  };

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

        <button onClick={props.onAdd}>Add</button>
        <button onClick={props.onDelete} id={props.id}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default PracticalExp;
