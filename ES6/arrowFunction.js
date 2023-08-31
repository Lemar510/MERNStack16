// //Arrow Function or fat arrow function or lambda expression
// //1. An easy and shorter way of defining functions, like lambda expressions
// //2. Resolves the context of a function by copying the context of immediate parent

// function Add(a, b) {
//     return a + b
// }
// console.log(Add(9, 1))

// // let AddArrow = (a=0,b=0)=>{
// //     return a + b
// // }

// let AddArrow = (a=0, b=0) => a + b
// console.log(AddArrow(9, 1))

// //resolving context, by copying immediate parent context

// //let _this = {} //global context

// let User = {
//     FirstName : "David",
//     Session : "Arrow Function - ES6",
//     getInfo : function() {
//             console.log(`
//                 ${this.FirstName}
//                 ${this.Session}
//             `)

//             setTimeout(() => {
//             console.log(`
//                 ${this.FirstName} //copies the context of immediate parent here it is - getInfo
//                 ${this.Session}
//             `)  
//             }, 2000)


//         // let _this = this //copying the context of getInfo to be used in setTimeout

//         // setTimeout(function () {
//         //     console.log(`
//         //         ${_this.FirstName}
//         //         ${_this.Session}
//         //     `)  
//         // }, 2000)
//     }
// }

// User.getInfo();

// Create a Student Object with a couple of properties and a function - printStudent, implement arrow function in setTimeout

let Student = {
    firstName: "Lemar",
    Age: 30,
    Height: 6.0,
    getInfo: function() {
        setTimeout(() => {
            console.log(`
            ${this.firstName}
            ${this.Age}
            ${this.Height}
            `)
        }, 1000)
    }
}

Student.getInfo();