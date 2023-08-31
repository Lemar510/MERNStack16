// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

// fetch user - call
// fetch product - call
// fetch stores - call

//stack1(main thread) - 200 mb (300 request/sec)
// ==> if requests increases 600 request/sec

//(async) 
//(await) 
//stack2(thread) -  100 mb (100 request/sec) 
//stack3(thread) -  100 mb (100 request/sec)
//stack4(thread) -  100 mb (100 request/sec)

// function resolveAfter2Seconds() {
//     return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 resolve({
//                     "statuscode" : 200,
//                     "statusmsg" :'resolved'
//                     });
//             }, 2000);
//     });
// }

// console.log("async Execution starts");

// async function asyncCall() {

//     console.log("Before await");

//     await resolveAfter2Seconds() //this is a blocking execution in separate thread
//             .then((data)=>{ console.log(data)})
//             .catch((err)=>{ console.log(err)})

//     console.log("After await");

//     await resolveAfter2Seconds() //this is a blocking execution in separate thread
//             .then((data)=>{ console.log(data)})
//             .catch((err)=>{ console.log(err)})

//     console.log("After await second time");
// }

// asyncCall()

// console.log("async Execution ends")

//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution

function getUserInfo() {
        return new Promise((resolve,reject) => {
                setTimeout(() => {
                    const userInfo = {
                        name: 'Lemar',
                        address: 'CA',
                        accountNumber: "12345"
                    };
                    resolve ({
                        "statuscode" : 200,
                        "statusmsg" : 'resolved'
                    });
                }, 3000);
                setTimeout(() => {
                       reject(new Error); 
                }, 2000);
        });
}

async function printUserInfo() {
        await getUserInfo()
                .then((data) => {console.log(data)})
                .catch((err) => {console.log(err)})
}

printUserInfo();
console.log("User info is....")


// // create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)
// // create a list using set and show the usage of 5 functions (.add, .clear)
let myMap = new Map();
let keyString = 'Hello', keyObj = {}, keyFunc = function (){}, keyNum = 1000;
myMap.set(keyString, "This is a string key")
myMap.set(keyObj, "This is an object key")
myMap.set(keyFunc, "This is a function key")
myMap.set(keyNum, "This is a number key")

console.log(myMap.get('Hello'))
console.log(myMap.has(keyString))
console.log(myMap.clear(keyNum))
console.log(myMap.delete(keyString))
console.log(myMap.entries())


// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function
function *arithmetic(num1,num2) {
    yield console.log("Addition: " + (num1 + num2));
    yield console.log("Subtraction: " + (num1 - num2));
    yield console.log("Division: " + (num1 / num2));
    yield console.log("Multiplication: " + (num1 * num2));
    yield console.log("Combination: " + (num1 + num2 * num1 / num2 * num1));

    return "done";
}
let calObj = arithmetic(5,3);
calObj.next()
calObj.next()
calObj.next()
calObj.next()
calObj.next()

