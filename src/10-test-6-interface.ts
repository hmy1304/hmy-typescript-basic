interface Person {
  name: string;
}

interface Employee extends Person {
  employeeId: number;
}

const emp: Employee = {
  name: "Jin",
  employeeId: 101
};
