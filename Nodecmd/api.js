//http / https :=> hypertext type protocol
//html => hypertext markup language

//http - stateless

//we need to save information on server so that we can access anywhere

//user - 
//https://www.arit.userbase.com/api/user/searches - {search items} - post

//https://www.arit.userbase.com/api/user/get/searches/userid - get

//saving information on ui/screen - representation

//REST - Respresentational State Transfer Protocol

//Rest ful API's have below specifications -
//it uses http
//definitive verbs or http method - get/put/post/patch/delete
//stateless

//http verbs -
//Create - Post
//Update - Put and Patch
//Read   - Get
//Delete - Delete

//Put and Patch

let User = {
    Name : "Van",
    Age : 20,
    Address : "Somewhere on moon!!!",
    UserId : "12453652"
}

//change my name - Van Duc Phan

// post - need to create complete object (full replacement)
let UserUpdated = {
    Name : "Van Duc Phan",
    Age : 20,
    Address : "Somewhere on moon!!!",
    UserId : "12453652"
}

// patch - need to create object with data that needs to be changed (partial replacement)
let UserUpdatedPatch = {
    Name : "Van Duc Phan",
    UserId : "12453652"
}