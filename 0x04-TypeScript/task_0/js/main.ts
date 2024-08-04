interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Ali",
  lastName: "Gamareldin",
  age: 29,
  location: "Sudan",
};

const student2: Student = {
  firstName: "mohammed",
  lastName: "Gamareldin",
  age: 29,
  location: "London",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const table_body = document.createElement("tbody");

for (let x = 0; x < studentsList.length; x++) {
  // create the rows of the table
  const row = document.createElement("tr");

  // create Two cells with firstName | location
  const firstNameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  // create the text of cells
  const firstName = document.createTextNode(`${studentsList[x].firstName}`);
  const location = document.createTextNode(`${studentsList[x].location}`);

  // append text to cells
  firstNameCell.appendChild(firstName);
  locationCell.appendChild(location);

  // append the cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // append the row to the table body
  table_body.appendChild(row);
}

// append the table body to the table
table.appendChild(table_body);

document.body.appendChild(table);
