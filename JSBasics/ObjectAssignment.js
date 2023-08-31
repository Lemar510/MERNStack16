/*
Person - object
Inherit as Student -
Overrride + object.assign
Prototype chain 
how to stop this protoype chain
*/

var Person = {
    Name: "Lemar",
    Age: 30,
    Profession: "Engineer",
    getPersonDetails: function () {
        return {
            Name: this.Name,
            Profession: this.Profession,
        }
    }
}

var Student = Object.create(Person);
Student.Name = "Saffi";
Student.Job = "Student";
Student.Class1 = "MERNStack";
Student.getStudentDetails = function () {
    return {
        Name: this.Name,
        Job: this.Job
    }
}

var Student2 = Object.create(Person);
Student2.Class2 = "DSA";
var noPrototype = Object.create(null);

var Human = {};
Object.assign(Human, Student, Student2);

console.log(Human.getStudentDetails());

