console.log("Functions")

// Simpel funktion utan paramter
function helloWorld() {
    console.log("function:", "Hello world")
}

helloWorld()
// helloWorld()

function greeting(name){
    console.log(`Hej ${name}`)
}

greeting("Jonatan")
greeting("Klassen")

/*
**Uppgift: Använd funktioner för att utföra en beräkning**

**Instruktioner:**

1. Skapa en funktion som heter `addNumbersLog` som tar två parametrar: `num1` och `num2` exempel (x,y).
2. Inuti funktionen, addera dessa två parametrar och `console.log` resultatet.

Extra uppgift: skriv en ny funktion `calc` som tar in (x,y, operator) operator är antingen "+" eller "-"
Beroende på operator console.log resultatet av kalkulationen
exempel calc(3,4,"-") => Resultat: -1
*/

// Funktion som tar in två parametrar och adderar dem
// Funktionen loggar resultatet och retunerar inget
function addNumbers(x, y) {
    const sum = x + y;
    console.log("Resultat:", sum);
}

addNumbers(1234,5678);
addNumbers(-1,Math.PI);
addNumbers(3,0)
addNumbers("Hello","world")

// Funktion som tar in två parametrar och adderar dem
// Funktionen retunerar resultatet och loggar inget om inte operatorn är felaktig
function calc(x, y, operator){
    let result = 0
    if(operator === "+"){
        result = x + y
    }
    else if(operator === "-"){
        result = x - y
    }
    else if(operator === "*") {
        result = x * y 
    }
    else if(operator === "/") {
        result = x / y 
    }
    else{
        console.log("Ogiltig operator:", operator)
    }
    
    return result
}

const sum = calc(1,2,"+")
const subtractionSum = calc(3,20,"-")
const product = calc(3,20,"*")
const divisionSum = calc(3,20,"/")
const incorrectSum = calc(3,20,"pow")

console.log("Sum:", sum)
console.log("subtractionSum:", subtractionSum)
console.log("product:", product)
console.log("divisionSum:", divisionSum)
console.log("incorrectSum:", incorrectSum)

// Komplex summa som använder sig av en funktion som en parameter
// parametern kommer kalkyleras först och sedan användas i den övergripande funktionen
// det kan skrivas som en matematisk formel (1+2) * (8-2)
// där sum = 3 och calc(8,2,"-") = 6
const complexSum = calc(
    sum, // 3
    calc(8,2,"-"), // 6
    "*" // 3 * 6 = 18
)
console.log("Complex sum", complexSum)