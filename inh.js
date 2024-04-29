var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class for all students
var Student = /** @class */ (function () {
    function Student(name, age) {
        this.name = name;
        this.age = age;
    }
    Student.prototype.display = function () {
        return "Student: ".concat(this.name, ", Age: ").concat(this.age);
    };
    return Student;
}());
// Subclass for undergraduate students, inheriting from Student
var Undergraduate = /** @class */ (function (_super) {
    __extends(Undergraduate, _super);
    function Undergraduate(name, age, major) {
        var _this = _super.call(this, name, age) || this;
        _this.name = name;
        _this.age = age;
        _this.major = major;
        return _this;
    }
    Undergraduate.prototype.display = function () {
        return "Undergraduate Student: ".concat(this.name, ", Age: ").concat(this.age, ", Major: ").concat(this.major);
    };
    return Undergraduate;
}(Student));
// Multilevel Inheritance
var GraduateStudent = /** @class */ (function (_super) {
    __extends(GraduateStudent, _super);
    function GraduateStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraduateStudent.prototype.enrollInCourse = function (course) {
        return "".concat(this.name, " enrolled in the course: ").concat(course);
    };
    return GraduateStudent;
}(Undergraduate));
// Output on the webpage
var outputElement = document.getElementById('output');
// Single Inheritance (Student to Undergraduate)
var undergraduate = new Undergraduate('John Doe', 20, 'Computer Science');
outputElement.innerHTML += "<p>Single Inheritance: ".concat(undergraduate.display(), "</p>");
// Multilevel Inheritance (Undergraduate to GraduateStudent)
var graduateStudent = new GraduateStudent('Jane Smith', 25, 'Physics');
outputElement.innerHTML += "<p>Multilevel Inheritance: ".concat(graduateStudent.display(), ", ").concat(graduateStudent.enrollInCourse('Quantum Mechanics'), "</p>");
