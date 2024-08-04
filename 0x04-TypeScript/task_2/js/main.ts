interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }
  getCoffeeBreak() {
    return "Getting a coffee break";
  }
  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }
  getCoffeeBreak() {
    return "Cannot have a break";
  }
  workTeacherTasks() {
    return "Getting to work";
  }
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary == "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}
/* 
console.log(createEmployee(200));
// Teacher;
console.log(createEmployee(1000));
// Director;
console.log(createEmployee("$500"));
 */
// task 6

/* function isDirector(employee: Director | Teacher): Director {
  if (employee instanceof Director) {
    return new Director()
} */

function executeWork(employee: Director | Teacher) {
  const isDirector = (emp: Director | Teacher) => {
    emp instanceof Director ? new Director() : new Teacher();
    return emp;
  };
  const typeOf = isDirector(employee);

  if (typeOf instanceof Director) {
    console.log(typeOf.workDirectorTasks());
  } else {
    console.log(typeOf.workTeacherTasks());
  }
}

/* executeWork(createEmployee(200));
// Getting to work
executeWork(createEmployee(1000));
// Getting to director tasks
 */

// task 7

function teachClass(todayClass: string): string {
  return `Teaching ${todayClass}`;
}

/* 
teachClass('Math');
Teaching Math
teachClass('History');
Teaching History
*/
