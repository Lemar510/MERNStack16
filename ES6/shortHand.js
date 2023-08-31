// If my key value (that i am reading from any variable) are same then instead of having both of them we can have only one

let cat = "Miaow", // if we put comma we don't need to use let again and it will continue as let till semicolon ;
dog = "Woof",
bird = "Chrip",
lion = "roar";


let animalSound = {
    cat : cat,
    dog : dog,
    bird : bird,
    lion : lion
}

//console.log("Animal Sounds are " + animalSound)
console.log("Animal Sounds are " + JSON.stringify(animalSound))

let animalSoundES6 = {
    cat,
    dog,
    bird,
    lion
}

console.log("Animal Sound Using Short Hand ", animalSoundES6)
