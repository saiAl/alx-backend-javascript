export default function createIteratorObject(report) {
  const emp = [];
  for (const keys of Object.keys(report.allEmployees)) {
    for (const idx in report.allEmployees[keys]) {
      if (typeof report.allEmployees[keys][idx] === 'string') {
        emp.push(report.allEmployees[keys][idx]);
      }
    }
  }
  return emp;
}
