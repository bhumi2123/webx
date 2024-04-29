var MyClass = /** @class */ (function () {
    function MyClass(name) {
        this.name = name;
        this.publicVariable = "This is a public variable";
        this.privateVariable = "This is a private variable";
        this.protectedVariable = "This is a protected variable";
    }
    MyClass.prototype.publicMethod = function () {
        return "This is a public method";
    };
    MyClass.prototype.privateMethod = function () {
        return "This is a private method";
    };
    MyClass.prototype.protectedMethod = function () {
        return "This is a protected method";
    };
    return MyClass;
}());
// Creating an instance of MyClass
var myObj = new MyClass("Object");
// Update HTML content with results
document.getElementById('output').innerHTML += "\n    <p>".concat(myObj.publicVariable, "</p>\n    <p>").concat(myObj.publicMethod(), "</p>\n");
// Accessing private members (commented out because it will result in an error)
// document.getElementById('output').innerHTML += `
//     <p>${myObj.privateVariable}</p>
//     <p>${myObj.privateMethod()}</p>
// `;
// Accessing protected members (commented out because it will result in an error)
// document.getElementById('output').innerHTML += `
//     <p>${myObj.protectedVariable}</p>
//     <p>${myObj.protectedMethod()}</p>
// `;
