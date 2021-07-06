const NavBar = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <h1>CV Generator</h1>

        <nav>
          <ul className="nav">
            <li>
              <button onClick={props.enterDefaults}>Demo Values</button>
            </li>
            <li>
              <button onClick={props.clearForm}>Clear Form</button>
            </li>
            <li>
              <button onClick={props.handlePrint}>Print PDF</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
