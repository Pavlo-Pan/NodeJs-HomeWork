interface Employee {
  name: string;
  salary: number;
}

export const employees: Employee[] = [
  { name: "John", salary: 3000 },
  { name: "Jane", salary: 4000 },
  { name: "Mike", salary: 3500 }
];

export function getSalaries(employeeList: Employee[]): number[] {
  return employeeList.map(emp => emp.salary);
}


