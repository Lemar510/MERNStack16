// OOP's fundamentals -
//1. Inheritance - constructor function in es5 and then classes in es6, prototype is the only way.
//2. Encapsulation - Data hiding can be done through closures, with the help of access modifers.
//3. Polymorphism - Overriding (it supports in function as well as in classes) and OverLoading (doesn't support overloading)
//4. Abstraction - Not required in JavaScript.

function Parent(name, age) {
    var _name = name;
    var _age = age;
    var AccountBalance = "$5000" //can be shared
    var acctPwd = "435545" //should be private

    var child = function GetAccountInfo(acctNo, pwd) {
        //write the function properties that needs to be used by outer world
        return {
            Name : _name,
            Age : _age,
            AccountBalance : AccountBalance,
            acctNo : acctNo
        }
    }

    return child;
}

var acct = Parent("Lemar", 21)

console.log(acct(123456, "pass"))