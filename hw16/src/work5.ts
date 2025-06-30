export interface Student {
    name: string;
    grade: number;
}

export function printStudentInfo(student: Student): void {
    console.log(`Name: ${student.name}, Grade: ${student.grade}`);
}

