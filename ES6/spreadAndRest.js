//Spread : is used to spread the elements of any object or array to be used one by one

let arrayOFCities = ["Rome", "New York", "New Delhi", "London"];

//  console.log(arrayOFCities[0]);
//  console.log(arrayOFCities[1]);


//  console.log(...arrayOFCities);//spread operator

// //spread operator is used to combine two objects and preserve the immutability of each object
let User = { name : "Jason", age : 25 }
let Address = {home : "Somewhere in US", office : "Virtual"}

let Employee = {...User, ...Address} //Object.assign // also makes merge immutable

User.session = "ES6"

// console.log(User)
// console.log(Employee)

function Sum(p1, p2, p3, p4, p5) {
    return p1 + p2 + p3 + p4 + p5
}

let arrNum = [25, 26, 2, 7,8,9, 3, 650]

//console.log(Sum.apply(null, arrNum))

//console.log(Sum(...arrNum)) //using spread to pass array values

//Rest - parameter, is just setting up ... to combine multiple values, must be the last param

// function SumRest(p1, p2, ...restParams) {
//     console.log(...restParams)
//     return p1 + p2;
// }

// console.log(SumRest(...arrNum))

// using Rest with Reduce function to get addition of unlimited parameters

function SumRest(...restParams) {
    let sum = 0;
    
    sum = restParams.reduce((prevVal, currVal, index, arr) =>{
        console.log("prevVal " + prevVal)
        console.log("currVal " + currVal)
        console.log("index " +index)
        console.log("Array " + arr)
        console.log("Next Iteration....... ")
        return prevVal + currVal
    }, 0)

    return sum;
}

console.log(SumRest(1,2,3))
console.log(SumRest(...arrNum))

//Questions

//Spread Operator - 
//create a list of vaccines and print
//create doctor object and print his qualifications and other details using spread
//create a vaccine object with details like - name, no of doses required, price etc and merge it with nearest doctor object using spread

 let vaccines = ["Pfizer", "Moderna", "JJ", "etc."]

 console.log(vaccines[0]);
 console.log(vaccines[1]);

 console.log(...vaccines);

 let Employee = {name: "Dr. Rashid", age: 30, address: "CA"}
 let Job = {degree: "BD", type: "Opthamologist"}

 let Doctor = {...Employee, ...Job}
 console.log(Doctor)

 let Vaccine = {
    name: "Covid-19 Vaccine", 
    doses: 2, 
    price: 50
};
 let merge = {...Vaccine, ...Doctor}
 console.log(merge)

 //Rest Parameter - 
//create a function which accepts start and end of number and generates a array of that size, [100....150]
//then use this array to pass as spread operator into a function named largesum
//in largesum we should accept the array in rest parameter (...arrayOfNums), and then add the numbers

function rest(start, end) {
    let arr = [];
    for (let i = start + 1; i <= end ; i++) {
        arr.push(i);
    }
    return arr;
}

function largesum(...arrayOfNums) {
    let sum = 0;
    sum = arrayOfNums.reduce((prevVal, currVal) => {
        return prevVal + currVal;
    }, 0)
    return sum;
}

console.log(largesum(...rest(100, 150)));
