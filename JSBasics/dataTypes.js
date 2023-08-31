// DataTypes are storage types to store various ntypes of data like - int, char, string, boolean, etc.

// In JavaScript, we have 6 data types: 
//String, Number, Boolean, Undefined, Null, Object

// in ES6 above, we can have Symbol as data

var checkDataType = 1.256 // decimal
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = 1256
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = "Lemar"
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = false //boolean
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = undefined //is a valid data type
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = null
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)

checkDataType = {} // {} -json object or object
console.log("Data type is: " + typeof checkDataType)
console.log("Data is: ", checkDataType)