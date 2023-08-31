//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

function doAddition(num1, num2, num3) {
    return num1 + num2 + num3;
}

console.log(doAddition(2,3,4)); //the function passes three parameters (above) and here, we are inputting three numbers to fulfill the condition/requirement.
console.log(doAddition(2)); // //the function passes three parameters (above) and here, we are missing two numbers. As a result, the condition/requirement isn't met and is printing as undefined.
console.log(doAddition(2,3,3)); //the function passes three parameters (above) and here, we are inputting three numbers to fulfill the condition/requirement.
console.log(doAddition("first",2,"three")); // I believe this is a string concatenation.