const Person = {
  name: 'jaham',
  age: 26,
  attr: 'member',
};

function Employee(name, age, sabun) {
  this.name = name;
  this.age = age;
  this.sabun = sabun;
}

class Student {
  constructor(grade) {
    Object.setPrototypeOf(Student, Person);
    this.grade = grade;
  }
}

const student = new Student(1);
student.name = 'jaham';
console.log(student.name);

class Admin extends Employee {
  constructor(attr) {
    super('somebody', 27, 123);
    this.adminAttr = attr;
  }
}

const admin = new Admin('Gaepo');
console.log(admin.adminAttr);
console.log(admin.name);
