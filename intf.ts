// Define an interface
interface Person {
    name: string;
    age: number;
    greet(): string;
}

// Implement the interface in a class
class Student implements Person {
    constructor(public name: string, public age: number) {}

    // Implementing the method defined in the interface
    greet(): string {
        return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
    }
}

// Creating an instance of the Student class
const student = new Student("John", 20);

// Update HTML content with the result
document.getElementById('output').innerHTML += `
    <p>${student.greet()}</p>
`;
