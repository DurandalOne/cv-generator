const CV = (props) => {
  const general = props.allValues;
  const practical = props.practicalValues;
  const education = props.educationValues;

  return (
    <div className="cv__view" ref={props.componentRef}>
      <header>
        <div className="heading">
          <h1>
            {general.FirstName} {general.LastName}
          </h1>
          <h2>{general.Position}</h2>
        </div>
        <div className="details">
          <div className="contact-details">
            <span>{general.PhoneNumber}</span>
          </div>
          <div className="contact-details">
            <span>{general.Email}</span>
          </div>
          <div className="contact-details">
            <span>{general.Address}</span>
          </div>
        </div>
      </header>
      <section>
        <div>{general.Description}</div>
      </section>
      <section>
        <div className="experience-list">
          <h3>work experience</h3>
          {practical.map((item) => (
            <div className="experience" key={item.id}>
              <div className="experience__heading">
                <h4>{item.Position}</h4>
                <div className="experience__details">
                  {item.Company} |{" "}
                  <span className="bold">
                    {item.From} – {item.To}
                  </span>
                </div>
              </div>
              {item.Description}
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="experience-list">
          <h3>education</h3>
          {education.map((item) => (
            <div className="experience" key={item.id}>
              <div className="experience__heading">
                <h4>{item.Subject}</h4>
                <div className="experience__details">
                  {item.School} |{" "}
                  <span className="bold">
                    {item.From} – {item.To}
                  </span>
                </div>
              </div>
              {item.Details}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CV;
