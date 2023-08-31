// Object: 

var User = {
    Name: "Lemar",
    Age: 22,
    Session: "MERNStack",
    getUserDetails: function (params) {
        return {
            Name: this.Name,
            Session: this.Session,
            Address: this.Address
        }
    }
}

User.Address = "Somewhere on earth";

console.log(User.getUserDetails());

// Inheritance of JS Object
//1. Using new keyword

var Engineer = new Object(User);

Engineer.Speciality = "Civil Engineer";

console.log(Engineer.Session);

Engineer.getSpecialityAndAddress = function () {
    return {
        Speciality: this.Speciality,
        Address: this.Address
    }
}

console.log(Engineer.getSpecialityAndAddress());

//override

Engineer.getUserDetails = function () {
    return {
        Speciality: this.Speciality,
        Address: this.Address,
        Name: this.Name
    }
}

console.log(Engineer.getUserDetails());