const EduExp = (props) => {
  const changeHandler = (e) => {
    props.getEduValues(e, props.index);
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

        <button onClick={props.onAdd}>Add</button>
        <button onClick={props.onDelete} id={props.id}>
          Delete
        </button>
      </form>
    </div>
  );
};

export default EduExp;
