

var someVal = 2500;

function ScopedFunction(params) {
    console.log(innerVal)
    var innerVal = 5000

    console.log(someVal)

    var someVal = 7500

    innerVal = 10000
    console.log(innerVal)
}
ScopedFunction();