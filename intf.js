// Implement the interface in a class
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    // Implementing the method defined in the interface
    Student.prototype.greet = function () {
        return "Hello, my name is ".concat(this.name, " and I am ").concat(this.age, " years old.");
    };
    return Student;
}());
// Creating an instance of the Student class
var student = new Student("John", 20);
// Update HTML content with the result
document.getElementById('output').innerHTML += "\n    <p>".concat(student.greet(), "</p>\n");
