// reduces initialization of global variables and helps reusing arrays

//array destructuring
//1. copying information from another array
// let [firstName , lastName , email] = ["Arit", "Chanda", "arit@arit.com"]

// console.log(firstName)
// console.log(lastName)
// console.log(email)

//2. set default values
// let [firstName , lastName , email, address = "Somewhere in US"] = ["Arit", "Chanda", "arit@arit.com", "Home Address"]
// console.log(firstName)
// console.log(lastName)
// console.log(email)
// console.log(address)

//3. we store rest of the value in last element

// let [a, b, c, ...lastelement] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(lastelement)

//4.  we can swap the values

// let x = 5, y = 6;

// [x, y] = [y, x] //swapping values

// console.log(x)
// console.log(y)


//Object Destructuring

//1. reading values from an object

let account = { name : "Van Duc", balance : "$50000", mortgage : "none", address : "US" }

// let name = account.name
// let balance = account.balance

let { name, balance, type = "Credit" } = account

console.log(name)
console.log(balance)
console.log(type)

//2. nested destructuring

let student = { stname : "Jason", branch : "Science", subjects : { math : 99, english : 95, chemistry : 96 } }


let { stname, subjects : { math, chemistry, physics = 99} } = student

console.log(stname)
console.log(math)
console.log(chemistry)
console.log(physics)

