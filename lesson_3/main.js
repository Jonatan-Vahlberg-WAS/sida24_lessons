console.log("Javascript - Variabler")

// Primaära variabler

const age = 27 // Number
const firstName = "Jonatan" // String
const hasPets = false // Boolean

// Null och Undefined

// Null - Är ett deklarerat icke värde
let petName = null
console.log("Null: ", petName)
if(petName) {
    console.log("Husdjur:", petName)
}
else {
    console.log("Har inget husdjur")
}

const pageTitle = document.getElementById("page-title") // Får null som värde för att elementet inte finns
console.log("Sid titel: ", pageTitle)
if(pageTitle) {
    console.log("har sidtitel")
    pageTitle.textContent = "Hello"
}
else {
    console.log("Har inte sidtitel")
}

// Undefined - Är avsaknaden till ett värde upstår oftast om man refarerar till ett värde eller metod som inte existerar
let currentCourse
console.log("Nuvarande kurs: ", currentCourse)
currentCourse = "S:DAS24H:A"
console.log("Nuvarande kurs efter deklaration: ", currentCourse)

console.log("Stäng metod som finns", firstName.length)
console.log("Nummer metod som inte finns", age.length)
//! console.log("Nummer metod som inte finns kallad på igen", age.length.toString()) // Kommer kracha vår kod


// Arrayer

// Sträng array
const vegetables = [
    "Tomat", 
    "Gurka", 
    "Spenat (gulbrun)", 
    "Isbergssallad", 
    "Pak Choi"
]
console.log("Grönsaker: ", vegetables)

// Hämta tomat från listan
const firstVegetable = vegetables[0]
console.log("Görnsaker (Först i listan):", firstVegetable)
console.log("Görnsaker (3:dje i listan):", vegetables[2])
console.log("Sallad: ", vegetables[0] + " och " + vegetables[3])

// Lägga till i arrayen
vegetables.push("Zucchini") // Push - Lägger till på slutet av array
console.log("Grönsaker efter inlägg: ", vegetables)

// Ta bort från arrayen
vegetables.pop()
console.log("Grönsaker efter borttagning: ", vegetables)

//Ta bort spesifik från index (0,1...)
vegetables.splice(2,1, "Färsk spenat") // Splice - Tar bort från index
//Splice forts: (index, antal element att ta bort)
//Splice forts: (index, antal element att ta bort, element att lägga till)
console.log("Grönsaker efter borttagning Spesifik: ", vegetables)

//! Uppgift Array 1
// 1. Skapa en array med 5 st namn
const danceStyles = [
    "Hip-hop", "Ballet", "Jazz", "Contemporary", "Floorwork", "Tap dance"
]
// 2. Logga ut namnen tips: console.log(names)
console.log("Dance styles: ", danceStyles)
// 3. Hämta det tredje namnet i arrayen och logga ut det
const thirdDanceStyle = danceStyles[2]
console.log("Third dance style: ", thirdDanceStyle)
// 4. Lägg till två namn i arrayen
danceStyles.push("House")
danceStyles.push("Popping")
// 5. Logga ut namnen
console.log("Dance styles: ", danceStyles)
// 6. Ta bort det andra namnet i arrayen tips: splice
danceStyles.splice(1,1)
// 7. Logga ut namnen
console.log("Dance styles: ", danceStyles)


// exempel lista ["Jonatan", "Erik", "Kalle", "Anna", "Sara"]
// Slut resultat ["Jonatan", "Kalle", "Anna", "Sara", "Peter", "Johan"]


// Extra Ta bort första namnet och ersät det tips: splice
danceStyles.splice(0,1, "Tango")
console.log("Dance styles: ", danceStyles)

console.clear() // Rensar konsolen av allt som kom tidigare
//! Jämförelse och If else
// Equals - == - Jämför två värden om dem är samma
const valueA = "John"
let valueB = "Mari"
console.log("Jämförelse",valueA == valueB) // Förväntat resultat false
valueB = "jhon"
console.log("Jämförelse med fel casing",valueA == valueB) // Förväntat resultat false
valueB = "John"
console.log("Jämförelse med rätt casing",valueA == valueB) // Förväntat resultat true

// == - Jämför endast värdena
console.log("Jämförelse mellan string och num", 18 == "18")

//True equals - === - Jämför två värden och dess typer
console.log("Jämförelse mellan string och num 2", 18 === "18")
console.log("Jämförelse mellan string och num 3", 18 === 18)

//! Jämförelse - Aritmetik
// Greater than - värde1 > värde2
console.log("Större än lösenord: 'password'", "password".length > 8)
// Less than - värde1 < värde2
const age2 = 27
console.log("Är minderårig:", age, age < 18)
// Greater than or equals - värde1 >= värde2
const cash = 200 // kr
console.log("Har tillräckligt för köpet: ", cash, cash >= 200)
// Less than or equals - värde1 <= värde2
const invalidTestScore = -3
console.log("Är test resultat ogiltigt:", invalidTestScore, invalidTestScore <= -1)

//! Jämförlse Och & eller
// OCH - && - Två eller mer statements måste vara sanna för att hela statementet är sant
let isNotMinor = age2 > 18
let hasEnoughCash = cash >= 200
let purchaseIsValid = isNotMinor && hasEnoughCash // kikar från vänster till höger
console.log("Köp är giltigt", {
    isNotMinor,
    hasEnoughCash,
    purchaseIsValid
})

hasEnoughCash = cash >= 1000
purchaseIsValid = isNotMinor && hasEnoughCash
console.log("Köp är giltigt 2", {
    isNotMinor,
    hasEnoughCash,
    purchaseIsValid
})

// ELLER - || - Två eller mer statements där åtminstånne ett stämmer
let vehicleGas = 10 // l
let hasEnoughGas = vehicleGas >= 20
let isHybrid = true 
let canDriveHome = hasEnoughGas || isHybrid
console.log(" Kan köra hem: ", {
    vehicleGas,
    hasEnoughGas,
    isHybrid,
    canDriveHome
})

isHybrid = false 
canDriveHome = hasEnoughGas || isHybrid
console.log(" Kan köra hem 2: ", {
    vehicleGas,
    hasEnoughGas,
    isHybrid,
    canDriveHome
})

// Kontrollera användarnamn

const storedUsername = "admin123"
const enteredUsername = "Admin123"

const usernameMatches = storedUsername === enteredUsername
console.log("usernameMatches", usernameMatches)

const usernameMatchesIgnoreCase =
    storedUsername.toLowerCase() ===
    enteredUsername.toLowerCase()
console.log("usernameMatchesIgnoreCase", usernameMatchesIgnoreCase)

// Är användare berrätigad till rabatt
const customerAge = 18
const isEligableForDiscount =
    customerAge > 65 ||
    customerAge < 18

console.log("customerAge", customerAge)
console.log("isEligableForDiscount", isEligableForDiscount)


// Kan bilen starta
const batteryLevel = 5
const isElectricCar = true

const lowerBatteryThreshold = 5

const canCarRun =
    isElectricCar === true &&
    batteryLevel >= 5

console.log(batteryLevel, isElectricCar, lowerBatteryThreshold)
console.log("canCarRun", canCarRun)

// Lösenord längd check
const password = "password "
const passwordLength = password.length
const passwordMinLength = 5
const passwordMaxLength = 15

if(passwordLength < passwordMinLength){
    console.log("Password to short")
}
else if(passwordLength > passwordMaxLength) {
    console.log("Password to long")
}
else if(password.includes(" ")){
    console.log("Password cant contain a space")
}
else {
    console.log("Password just right")
}


// ! = Not - Inverterar ett värdea
const isValidPassword = !password.includes(" ")
console.log("isValidPassword", isValidPassword)


// Object

const user = {
    firstName: "Test",
    lastName: "Testsson",
    isAdmin: false,
    age: 19
}

console.log("USER", user, `${user.firstName} ${user.lastName}`)

const userFullname = user.firstName + " " + user.lastName
console.log("Fullname:", userFullname)

console.log("Document", document.body.style)
console.log("Document", document.getElementById("page-title"))



//if else if else
if(user.isAdmin){
    console.log("User is admin")
}

// Användare begär adminrättigheter
if(user.age >= 18){
    user.isAdmin = true
}
else if(user.age <= 12){
    console.log("Användar kontot låses: Behöver föräldrars tillstånd")
}
else {
    console.log("Användare får inte begära admin rättigheter")
}
console.log("USER", user)
//Object

// 1 Skapa objectet med nycklar
/*
    brand: "Audi"
    modelYear: 2000
    model: "A3"
    currentMileage: 8000
    bigServiceMileage: 6000
*/
const car = {
    brand: "Audi",
    modelYear: 2000,
    model: "A3",
    currentMileage: 8000,
    bigServiceMileage: 6000
}

// 2 console.log `You own a {brand} {model} that has been driven for {currentMileage} km`
console.log(
    `You own a ${car.brand} ${car.model} that has been driven for ${car.currentMileage} km`
)

// 3 Om currentMileage är större än bigServiceMileage: console.log "Time for big service"
if(car.currentMileage > car.bigServiceMileage){
    console.log("Time for big service")
    console.log("Preforming big service")
    car.bigServiceMileage += car.bigServiceMileage
    console.log(car.bigServiceMileage)
}

console.log("Car:", car)
