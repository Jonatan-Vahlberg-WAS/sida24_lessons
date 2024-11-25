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

//Funktioner grundläggande värden
// Kan man ge parametrar värden om den imnte fylls i
// Sådana parametrar ska altid komma sist
function calc2(x, y, operator = "+"){
    //Gör kalkylation
    console.log(x, y, operator)
}

// Viktig data bör inte ha grundläggande värde om dem inte måste det
function greeting2(name, language = "sv"){
    if(language === "sv"){
        console.log(`Hej mitt namn är ${name}`)
    }
    else if(language === "en"){
        console.log(`HI my name is ${name}`)
    }
    else {
        console.log("Invalid language code:", language)
    }
}

calc2(1,2)
calc2(1,2, "-")

greeting2("Jonatan")
greeting2("Jonatan","en")
greeting2("Jonatan", "de")

// Arrayer bör oftast ha grundläggande värden
function logFruits(fruits = []){
    console.log("Fruits:",fruits)
    console.log("Length", fruits.length)
    if(fruits.length > 0) {
        console.log("First fruit:", fruits[0])
    }
}

logFruits()
logFruits([])
logFruits(['Apple'])

/*
**Uppdaterad Uppgift: Skapa funktioner med parametrar och villkor**

**Instruktioner:**

1. Skapa en funktion som heter `checkTemperature` som tar en parameter `temperature`.
2. Funktionen ska använda villkor för att ge feedback baserat på följande gränsvärden:
    - Om `temperature` är mindre än `0`, ska funktionen returnera `"Too cold"`.
    - Om `temperature` är större än `100`, ska funktionen returnera `"Too hot"`.
    - Annars ska funktionen returnera `Normal temperature: ${temperature}`.
3. Anropa funktionen med olika temperaturvärden och skriv ut resultaten i konsolen.

**Extra Uppgift:**

- Modifiera funktionen så att den tar en **andra valfri parameter** '
    `isFahrenheit = false` (en boolean som anger om temperaturen är i Fahrenheit). 
    Om `isFahrenheit` är `true`, **konvertera** temperaturen från Fahrenheit till Celsius 
    med formeln: Använd sedan de ursprungliga villkoren för att returnera lämplig feedback.
    Formeln: temperature = (temperature - 32) * 5 / 9;
*/

function checkTemperature(temperature, isFahrenheit=false){
    
    if(isFahrenheit === true){
        temperature = (temperature - 32) * 5 / 9 // Fahreheit till celcius
    }
    if(temperature < 0) {
        console.log(`Is too cold (${temperature.toFixed(1)})`)
    }
    else if(temperature > 100) {
        console.log(`Is too hot (${temperature.toFixed(1)})`)
    }
    else {
        console.log(`Normal temperature: ${temperature.toFixed(1)}`)
    }
}

checkTemperature(-2)
checkTemperature(20)
checkTemperature(200)

checkTemperature(104, true)
checkTemperature(250, true)

