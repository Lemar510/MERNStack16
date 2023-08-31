//Class in ES6 is special type of function with almost all the features that OOPS class should have


// class MyClass{ //uses class keyword
//     constructor(){}//initializa the class object
//     method(){}//functions to provide behaviour that we expect from the class
// }


// class Vaccination {
//     constructor(name, price) {
//         this.VaccineName = name
//         this.VaccinePrice = price
//         this.ScheduleDate = new Date()
//     }

//     getVaccineDetails = function (availability) {
//         return {
//             Name : this.VaccineName,
//             Price : this.VaccinePrice,
//             Available : availability ? "Yes" : "No"
//         }
//     }

//     getSchedule = ()=>{
//         return {
//             Name : this.VaccineName,
//             Price : this.VaccinePrice,
//             Schedule : this.ScheduleDate.toLocaleString()
//         }
//     }
// }

// let vaccinationSlot = new Vaccination("PFizer", "$100")

// console.log(vaccinationSlot.getVaccineDetails(true));
// console.log(vaccinationSlot.getSchedule());

//Question : create a class to calculate area of anything - rectangle, circle, one object of your choice
class Shape {
    constructor(length, width) {
        this.length = length
        this.width = width
    }

    getArea = function() {
        return this.length * this.width;
    }
}

let square = new Shape(5,5);
console.log(square.getArea());