//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
// and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

checkDataType = "Robert";
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = "Robert Jr.";
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = null;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = {} 
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = {myname : "Test Me"};
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = .0266;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = 25166665;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = -32767;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = false;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = true;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = undefined;
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)