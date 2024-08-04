// task 0
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [other: string]: any;
}

// task 1
interface Directors extends Teacher {
  numberOfReports: number;
}

// task 3
function printTeacher(firstName: string, lastName: string): string {
  return `${firstName[0]}. ${lastName}`;
}

interface printTeacherFunction {
  firstName: string;
  lastName: string;
}

// task 4

interface StudentInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface constructorInterface {
  new (firstName: string, lastName: string): constructorInterface;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return `${this.firstName}`;
  }
}

const s = new StudentClass("ali", "mohammed");
console.log(s);
