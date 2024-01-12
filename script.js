//complete this code
class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  get name() {
    return this._name;
  }

  set age(newAge) {
    this._age = newAge;
  }

  get age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this.name} is studying`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

// Example usage:

// Creating an instance of the Person class
const person = new Person("John", 25);
console.log(`Person: ${person.name}, Age: ${person.age}`);

// Creating an instance of the Student class
const student = new Student("Alice", 20);
student.study();

// Creating an instance of the Teacher class
const teacher = new Teacher("Mr. Smith", 35);
teacher.teach();
