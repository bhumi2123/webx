// Base class for all students
class Student {
    constructor(public name: string, public age: number) {}

    display(): string {
        return `Student: ${this.name}, Age: ${this.age}`;
    }
}

// Subclass for undergraduate students, inheriting from Student
class Undergraduate extends Student {
    constructor(public name: string, public age: number, public major: string) {
        super(name, age);
    }

    display(): string {
        return `Undergraduate Student: ${this.name}, Age: ${this.age}, Major: ${this.major}`;
    }
}

// Multilevel Inheritance
class GraduateStudent extends Undergraduate {
    enrollInCourse(course: string): string {
        return `${this.name} enrolled in the course: ${course}`;
    }
}

// Output on the webpage
const outputElement = document.getElementById('output');

// Single Inheritance (Student to Undergraduate)
const undergraduate = new Undergraduate('John Doe', 20, 'Computer Science');
outputElement.innerHTML += `<p>Single Inheritance: ${undergraduate.display()}</p>`;

// Multilevel Inheritance (Undergraduate to GraduateStudent)
const graduateStudent = new GraduateStudent('Jane Smith', 25, 'Physics');
outputElement.innerHTML += `<p>Multilevel Inheritance: ${graduateStudent.display()}, ${graduateStudent.enrollInCourse('Quantum Mechanics')}</p>`;
