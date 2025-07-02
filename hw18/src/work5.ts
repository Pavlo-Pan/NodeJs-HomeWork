interface Person {
  firstName: string;
  lastName: string;
}

interface Student extends Person {
  grade: number;
}

export const student: Student = {
  firstName: "Emma",
  lastName: "Johnson",
  grade: 95
};

export function printStudentInfo(student: Student): void {
  console.log(`Name: ${student.firstName} ${student.lastName}, Grade: ${student.grade}`);
}
