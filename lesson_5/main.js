console.log("Repition av föregående lektioner");


// Objekt - en samling av nyckel-värde-par
// Objekt skapas med hjälp av måsvingar {}
// Nyckel och värde separeras med kolon :

// Exempel på objekt - även konstanta object kan man modifiera nyckel-värde-paren
// Dock kan man inte ändra vad personen är för typ av objekt altså byta ut personen till något annat
const person = {
    name: "Kalle",
    age: 30,
    city: "Stockholm"
};
console.log(person)

// Object nestade i object
const person2 = {
    name: "Kalle",
    age: 30,
    city: "Stockholm",
    address: {
        street: "Kungsgatan",
        number: 12
    }
};
console.log(person2)

// Objekt kan ha funktioner som värden
// Dessa kallas för metoder
const person3 = {
    name: "Kalle",
    age: 30,
    city: "Stockholm",
    address: {
        street: "Kungsgatan",
        number: 12
    },
    greeting: function(){
        // this refererar till objektet som metoden är kopplad till
        // this.name refererar till namnet i objektet
        console.log(`Hej mitt namn är ${this.name}`)
        console.log(`Jag bor på ${this.address.street} ${this.address.number}`)
    }
};
console.log(person3)

// Vi kan kalla på metoder i objekt med punktnotation
person3.greeting()

// Vi kan komma åt och ändra värden i objekt med punktnotation
console.log(person.name)
person.name = "Jonatan"
console.log(person.name)

// ----------------------------------------------------------------

// Arrayer - en samling av värden
// Arrayer skapas med hjälp av hakparenteser [] (square brackets)
// Värden separeras med komma ,
const fruits = ["apple", "banana", "orange"]

// Arrayer är indexbaserade, det första värdet har index 0
// Det andra värdet har index 1, osv

// Arrayer kan innehålla olika typer av värden men bör oftast innehålla samma typ av värden
// Det är oftast bättre då att ha ett objekt med nyckel-värde-par
const mixed = ["apple", 1, true]

// Arrayer kan innehålla objekt
const people = [ person, person2, person3 ]

// Vi kan komma åt och ändra värden i arrayer med index
console.log(fruits[0])
fruits[0] = "pear"

// Vi kan komma åt och ändra värden i objekt i arrayer med index och punktnotation
console.log(people[0].name)
people[0].name = "Pelle"
people[1].name = "Adriana"
console.log("People after change:", people)

// Vi kan hämta längden av en array med length
console.log(fruits.length)

// Vi kan lägga till värden i en array med push (lägger till i slutet)
fruits.push("kiwi")
console.log("Fruites after push:", fruits)

// Vi kan ta bort värden i en array med pop (tar bort i slutet)
people.pop()
console.log("People after pop:", people) // kommer ta bort sista personen

// Vi kan ta bort värden i en array med splice (tar bort på index)
fruits.splice(1,1) // tar bort 1 värde på index 1
console.log("Fruits after splice:", fruits)

// Vi kan lägga till värden i en array med splice (lägger till på index)
fruits.splice(1, 0, "banana") // lägger till "banana" på index 1
console.log("Fruits after splice with add:", fruits)

// ----------------------------------------------------------------

// Strängar - en samling av tecken
// Strängar skapas med hjälp av citattecken "" eller '' eller backticks ``
let name2 = "jonatan"

// Sträng metoder
// Vi kan komma åt tecken i en sträng med index
console.log(name2[0])
//vi kan ändra tecken i en sträng med index
name2 = name2[0].toUpperCase() + name2.slice(1)
// name2[0] toUpperCase() kommer att ändra första bokstaven till stor bokstav
// name2.slice(1) kommer att ta bort första bokstaven och returnera resten av strängen
console.log("Name after change:", name2) // kommer inte ändra namnet

// Vi kan komma åt längden av en sträng med length
console.log(name2.length)

// vi kan göra hela texten till stora bokstäver
console.log(name2.toUpperCase())
// För att ändra till små bokstäver måste vi spara det i en variabel
name2 = name2.toUpperCase()

const names =[ name2, "Kalle", "Pelle"]

// split() metoden kommer att dela upp en sträng i en array
// split() tar en parameter som är tecknet som ska delas på
const nameArray = name2.split("") // kommer att dela upp namnet i en array med varje tecken som ett värde

const helloWorldArray = "Hello World".split(" ") // kommer att dela upp strängen i en array med två värden "Hello" och "World"
console.log(helloWorldArray)

const foxString = "The quick brown fox jumps over the lazy dog"
const foxArray = foxString.split(" ") // kommer att dela upp strängen i en array med varje ord som ett värde'
console.log(foxArray)

// join() metoden kommer att sätta ihop en array till en sträng
// join() tar en parameter som är tecknet som ska sättas mellan värdena
const nameString = nameArray.join("") // kommer att sätta ihop arrayen till en sträng

const helloWorldString = helloWorldArray.join(" ") // kommer att sätta ihop arrayen till en sträng med ett mellanslag mellan värdena

const foxString2 = foxArray.join(" ") // kommer att sätta ihop arrayen till en sträng med ett mellanslag mellan värdena

// ----------------------------------------------------------------

// Functions - en samling av kod som kan kallas på
// Funktioner skapas med hjälp av nyckelordet function

// Funktioner kan ha parametrar som är värden som skickas in i funktionen
// Parametrar separeras med komma
function greet(name){
    console.log(`Hello ${name}`)
}

// man kan kalla på funktionen med argument
greet("Jonatan")

// Funktioner kan returnera värden med nyckelordet return
function add(x, y){
    return x + y
}

const sum2 = add(1, 2)
console.log("Sum:", sum2)

// Funktioner kan ha grundläggande värden
// Om ett grundläggande värde inte fylls i kommer det att användas
// Sådana parametrar ska alltid komma sist
function greeting2(name, language = "sv"){
    if(language === "sv"){
        console.log(`Hej mitt namn är ${name}`)
    }
    else if(language === "en"){
        console.log(`Hi my name is ${name}`)
    }
    else {
        console.log("Invalid language code:", language)
    }
}

greeting2("Jonatan")
greeting2("Jonatan", "en")

// Funktioner kan ha flera parametrar
// Parametrar separeras med komma

// Funktioner kan ha flera returneringar
// En funktion stannar vid första returneringen
function calc(x, y, operator = "+"){
    let result
    if(operator === "+"){
        result = x + y
    }
    else if(operator === "-"){
        result = x - y
    }
    else if(operator === "*"){
        result = x * y
    }
    else if(operator === "/"){
        result = x / y
    }
    else {
        console.log("Invalid operator:", operator)
    }

    return result
}

const sum = calc(1, 2, "+") // 1 + 2 = 3
const subtractionSum = calc(3, 20, "-") // 3 - 20 = -17
const product = calc(3, 20, "*") // 3 * 20 = 60
const divisionSum = calc(3, 20, "/") // 3 / 20 = 0.15

console.log("Sums:", { sum, subtractionSum, product, divisionSum })

// Komplex summa som använder sig av en funktion som en parameter
// Parametern kommer kalkyleras först och sedan användas i den övergripande funktionen
// Det kan skrivas som en matematisk formel (1 + 2) * (8 - 2)
// Där sum = 3 och calc(8, 2, "-") = 6
const complexSum = calc(
    sum, // 3
    calc(8, 2, "-"), // 6
    "*" // 3 * 6 = 18
)

console.log("Complex sum:", complexSum)