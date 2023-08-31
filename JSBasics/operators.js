// Operators like -&&, or (||), !, =, ==, ===, <, >, >=, <=, ++
// ternary operator - ?


var age = "18"
var isValidID = "Voter ID"
// Note: == only compares data, not type whereas === compares data as well as type
if (isValidID && age===18) {
    console.log("Is Valid Voter")
} else {
    console.log("Isn't a Valid Voter")
}

// using ternary
//condition when true : when false

isValidID && age===18 ? console.log("Is Valid Voter") : console.log("Is Not a Valid Voter")

// git add .
// git commit -m