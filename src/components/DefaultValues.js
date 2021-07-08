import uniqid from "uniqid";

const blankPersonalDetails = {
  FirstName: "",
  LastName: "",
  Position: "",
  Address: "",
  PhoneNumber: "",
  Email: "",
  Describe: "",
  id: uniqid(),
};

const blankWorkDetails = {
  Position: "",
  Company: "",
  From: "",
  To: "",
  Description: "",
  id: uniqid(),
};

const blankEducationDetails = {
  School: "",
  Subject: "",
  From: "",
  To: "",
  Details: "",
  id: uniqid(),
};

const defaultPersonalDetails = {
  FirstName: "John",
  LastName: "Smith",
  Position: "Software Developer",
  Address: "1 Infinite Loop, Cupertino, CA",
  PhoneNumber: "01234 567890",
  Email: "john@smith.com",
  Description:
    "Lorem ipsum dolor sit amet, quando eripuit argumentum nam id, agam saperet docendi ius an. Ad putant iriure commune mei. Ut pri graeco officiis. Pro dictas adipisci ei. Inani volutpat sit et. Quo tollit veniam dignissim eu, fugit commodo disputationi no nec.",
  id: uniqid(),
};

const defaultWorkDetails = [
  {
    Position: "Software Engineer",
    Company: "A Software Company",
    From: "2015",
    To: "Present",
    Description:
      "Ut fugiat minim qui voluptate culpa. Elit nostrud ex ad incididunt incididunt eiusmod. Officia cupidatat culpa commodo nisi nostrud.",
    id: uniqid(),
  },
  {
    Position: "Barista",
    Company: "Starbucks",
    From: "2015",
    To: "2011",
    Description: "Enim elit aliquip fugiat anim proident.",
    id: uniqid(),
  },
];

const defaultEducationDetails = [
  {
    School: "Harvard University",
    Subject: "CS50: Web Programming with Python and JavaScript",
    From: "2020",
    To: "Present",
    Details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris consequat nisi eget mollis hendrerit. Proin lacinia dolor hendrerit convallis varius. Fusce sollicitudin, justo quis pellentesque commodo, est leo elementum odio, sed rutrum purus arcu vel diam.",
    id: uniqid(),
  },
  {
    School: "Open University",
    Subject: "Computer Science (BSc)",
    From: "2017",
    To: "Present",
    Details:
      "Nam non enim turpis. Aenean vitae diam hendrerit, mattis nisl sit amet, tincidunt lectus. Phasellus massa lorem, finibus ut risus quis, vehicula ultrices dui. Aliquam rutrum nibh ligula, pharetra tempus turpis gravida a. Praesent neque leo, iaculis vel enim eu, pretium finibus diam. Nunc sit amet sapien nec nisi feugiat aliquam in vitae dolor.",
    id: uniqid(),
  },
];

export {
  defaultPersonalDetails,
  defaultWorkDetails,
  defaultEducationDetails,
  blankPersonalDetails,
  blankWorkDetails,
  blankEducationDetails,
};
