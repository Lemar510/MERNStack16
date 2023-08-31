// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
        // a. Get heroes who are not evils
        // b. Print Unique family names
        // c. Print Hero Names from given objects, and append sir in each of them before printing
        // d. Do we have any hero in Marvel Family who is not evil

        const heroes = [
          { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
          { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
          { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
          { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
          { name: 'Batman',         family: 'DC Comics', isEvil: false },
          { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
          { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
          { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
          { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
        ]
// a.
const goodHeroes = heroes.filter((hero)=> !hero.isEvil);
console.log(goodHeroes)

// b.
const uniqueFNames = heroes.reduce((pre, curr) => {
    pre[curr.family] = pre[curr.family] ? pre[curr.family] + 1 : 1;
    return pre;
}, new Set())
console.log(uniqueFNames)

// c.
const sirHero = heroes.map(hero => `Sir ${hero.name}`);
console.log(sirHero)

// d.
const notEvil = heroes.filter((hero)=> hero.family === 'Marvel' && !hero.isEvil);
console.log(notEvil);

//2. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
const map = new Map();

map.set('name', 'Lemar')
map.set('age', '30')
map.set('profession', 'programmer')
console.log(map);

//3. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved
let completeAssessment = new Promise((resolve, reject)=>{

    setTimeout(() => {
        resolve({ 
            "Planned" : "Yes",
            "Status" : "Completing questions one by one",
            "Status Code" : 200
        })
    }, 2000);    

    setTimeout(() => {
        reject({ 
            "Planned" : "No",
            "Status" : "In progress",
            "Status Code" : 500
        })
    }, 3000);    
})

console.log("Promise Status!!! ", completeAssessment);

completeAssessment
    .then((data)=>{
        console.log(data)
})
    .catch((err)=>{
     console.log(err)
})

console.log("Promise Completed!!!");

// 4. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//   also need to print students of the session using same example

// 5. Print the last name through destructuring and add a contact number: 9119119110 as well
const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}
const {userDetails: {last}, contactNumber = 9119119110} = person;
console.log(last)
console.log(contactNumber)

//6. Give me an example of const data manipulation
const car = {
    name: "Mustang",
    color: "Red",
    type: "Coupe"
};

car.color = "Blue";
car.type= "SUV";
console.log(car)

//7. What is the difference between for-of and for-in show with examples

//for-in
let pet = {fname:"princess", type: "domestic", age: 12};

for (const key in pet) {
    console.log(key)
    const element = pet[key];
    console.log(element)
}

//for-of
let shoes = ['Nike', 'Reebok', 'Adidas']; 

shoes[3] = "Jordans"

console.log(shoes);

for (const shoe of shoes) {
    console.log(" "+ shoe)
}

//8. There is a task where we need to make three server calls - named as signin, userregistration and nextpageToNavigate
//   all of them should contain a status code and status success or failed
//   Create three promises for the same and we need to make sure that we move the user to next page only when all the calls are succeeded

//9. In question number 9 we need to check the status of each promise and we can move to the next page even if nextpageToNavigate 
//   call gets failed however nothing should be done if first to fails, give me an example of cocurrent promises
//   with which we can achieve such scenarios

// Optional -
//10. Using the promise object at #3 create an async and await feature