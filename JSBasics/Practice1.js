//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

// let StudentTest = {
//     firstname : "Lemar",
//     address : "California",
//     sessionTopics : {
//         covered1 : "CoreJS",
//         covered2 : "OOJS"
//     }
// }

// let {firstname, lastname = "LS", address, sessionTopics: {covered1, covered2, covered3 = "ES6"}} = StudentTest;

// console.log(firstname)
// console.log(covered1, covered2, covered3)

// 1. //create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0

function multiply (a=0, b=0, c=0) {
    if (a === 0 || b === 0 || c === 0) {
        return 0;
    }
    return a*b*c;
}
console.log(multiply(5,1,1))
console.log(multiply())

//2. create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop

let arr = [1,2,3,4,5];
arr[5] = 6;

for (let num of arr) {
    console.log(num)
}

for (let key in arr) {
    let element = arr[key];
    console.log(element);
}

//3. create an example of const where we can update on property of the object, where it says const is mutable

const car = {
    type: "Ford",
    year: 2022,
};

car.year = 2023;
car.color = "Red";

console.log(car);

//4. create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 