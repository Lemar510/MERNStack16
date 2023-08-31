
//console.log(my_let);
// 1. 

//var is a functional scope. let and const are block scope (lexical scope) and do not support hoisting.
//{
   // var my_var = "new value"
   // let my_let = "new value let"
   // const my_const = "new value const"
//}

//console.log(my_var)
//console.log(my_let)
//console.log(my_const)

// 2. 

//var my_var = "new value" //initialized
//var my_var = "new value"

//let my_let = "new value let"
//let my_let = "new value let" //cant be re-initialized or declared
//my_let = "new value for let usage"

//cant be reassigned
//const my_const = "new value const"
//my_const = "new value const"
//console.log(my_const);

// 3.

//const needs to be assigned a value as soon as its declared.

// var my_var;
// let my_let;


for (var index = 1; index < 5; index++) {
    setTimeout(() => {
        console.log("Incremented value " + index)
    }, 1000);
}
console.log("Last Incremented value " + index)