// //Normal iterators do not preserve the immutability
// //New Iterators - Filter, Map, Reduce and Some, these ES6 iterators help us extract information and 
// //also preserve the immutability

// let personsList = [
//     {id : 1, name : "John", savedby : "CaptainAmerica"},
//     {id : 2, name : "Alice", savedby : "IronMan"},
//     {id : 3, name : "Roger", savedby : "CaptainAmerica"},
//     {id : 4, name : "Adam", savedby : "IronMan"},
//     {id : 5, name : "Alex", savedby : "SpiderMan"},
//     {id : 6, name : "Robin", savedby : "Batman"}
// ];

// //1. Get the list of persons saved by IronMan

// let personsSavedByIronMan = personsList.filter((person)=>person.savedby === "IronMan")

// console.log(personsSavedByIronMan)
// //console.log(personsList)

// //2. Get the name list of persons saved by CA, append Mr before their name

// //let personsSvdByCA = personsList.map((person)=> person.savedby == "CaptainAmerica" ? `Mr. ${person.name}` : "").filter(p=>p!="")
// let personsSvdByCA = personsList.map((prsn)=> {
//                         if(prsn.savedby == "CaptainAmerica") { 
//                                 return { "Lucky Person" : `Mr. ${prsn.name}`}
//                         }else{ 
//                             return ""
//                         }}).filter(q=>q!="")

// console.log(personsSvdByCA)
// //console.log(personsList)

// //3. If there is someone saved by batman or thor

// let anyOneSavedByBatman = personsList.some((person)=> person.savedby == "Batman")

// console.log(anyOneSavedByBatman)

// let anyOneSavedByThor = personsList.some((person)=> person.savedby == "Thor")

// console.log(anyOneSavedByThor)


// //4. Get count of uniquely saved persons by each superhero

// let uniquelySavedPrsns = personsList.reduce((prevVal, currVal, index, array)=>{
//                     console.log(prevVal)
//                     console.log(currVal)

//                     prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1;
                    
//                     return prevVal

//                     }, new Set())

// console.log(uniquelySavedPrsns)



//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "javascript"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
let personsWithJStag = persons.filter((person)=>person.tags === "javascript");
console.log(personsWithJStag);

//2. List the same on person using java and put programmer after their name, change the name key to Developer
let javaPerson = persons.map((person) => 
    person.tags === "java" ? {"Developer": `${person.name} programmer`} : "").filter(p=>p!= "");
    console.log(javaPerson)

//3. If we have anyone with tag python
let personsWithPYTtag = persons.filter((person)=>person.tags === "python");
console.log(personsWithPYTtag);
//4. Find the number of unique tags and their count present
let uniqueTags = persons.reduce((prevVal, currVal) => {
    prevVal[currVal.tags] = prevVal[currVal.tags] ? prevVal[currVal.tags] + 1 : 1;
    return prevVal;
}, new Set())
console.log(uniqueTags)