// This have four context
// 1. Global execution context
// 2. In functional Executional Context
// 3. Plain function call -- Window Object
// 4. With object Chaining -- That object
// 5. Inside constructior function -- empty object
// 6. In "strict Mode" -- plain function -- undefined


// Here "this" refer "person" object and console.log print all of the object in the person
//--------------------- object with "fullName" also
const person = {
    firstName: "Mahmudul",
    lastName: "Hasan",
    fullName(){
        console.log(this)
    }
}

console.log(person);

//--------------------- Here "this" refers to that object if we call next to something 
const personData = {
    firstName: "Mahmudul",
    lastName: "Hasan",
    fullName(){
        // return personData.firstName + " " + personData.lastName
        return this.firstName + " " + this.lastName // Here this refers to "personData" object like "firstName" & "lastName"
    }
}

console.log(personData.fullName());


//--------------------- construction function
function humanData(){
    //console.log(this)
    this.firstName = "Shamim"
    console.log(this)
}

let constData = new humanData(); 
console.log(constData);


//--------------------- We can define "this" by ourself by "Call" method
function greet(){
    console.log(this)
    return 'Hi' + this.name
}

greet.call({name: "Mahmudul"})

//--------------------- Second Example, Call Method
function greet2(lastName){
    return 'Hi,' + " " + this.firstName + " " + lastName
}

//let greetings = greet2.call({firstName: "Mahmudul"}, "Hasan")
let pName = {firstName: "Mahmudul"}
let greetings = greet2.call(pName, "Hasan")
console.log(greetings);

//--------------------- Apply method
function fruits(EuropianFruits, commonFruits){
    return 'All Fruits: ' + this.BDFruits + EuropianFruits + commonFruits
}

//let greetings = greet2.call({firstName: "Mahmudul"}, "Hasan")
let BDFruitsName = {BDFruits: "Mango, "}
let AllFruits = fruits.apply(BDFruitsName, ["Persimon, ", "Lichy"])
console.log(AllFruits);

//--------------------- Bind method
function countryData(Asia, Europe){
    return "Country Data: " + this.countryBD + Asia + Europe
}

let ourCountry = {countryBD: "Bangladesh "}
let allCountry = countryData.bind(ourCountry, "India ", "UK")
console.log(allCountry())