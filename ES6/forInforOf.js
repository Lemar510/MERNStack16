// for in loop - iterates over the property value, basically meant for json objects with - key values

//for in loop  
let person = {fname:"John", lname:"Doe", age:25, address : {}}; 

for (const key in person) {
    //if (Object.hasOwnProperty.call(person, key)) {
        console.log(key)
        const element = person[key];
        console.log(element)
    //}
}

console.log("Other Example") 

let arr = [3,5,7]; //{0:3,1:5,2:7, newKey : "Dillon"}
arr.newKey = "Dillon"

console.log(arr)

for (const key in arr) {
    
    console.log(key)
    const element = arr[key];
    console.log(element)
}

//for of loop :Mainely for arrays, iterates over the property names, more recommended for array of numbers or string instead of objects

console.log("For Of Loop") 
let cars = ['BMW', 'Volvo', 'Mini']; 

//cars.newCar = "Toyota"
cars[3] = "Toyota"

console.log(cars);

for (const car of cars) {
    console.log(" "+ car)
}