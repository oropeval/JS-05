/**User profile
Write a program that prompts a user for their data: username, age, and a list of their favorite movies. 
Store the information and then showcase it in the console. Take note that the output for the films should
 add a small message like: 'The film {film} is one of my favorites'.*/

let userName = "pablo";
let edad = 23;
let peliFav = ["barbie", "nemo", "rango"]
console.log(`Nombre de usuario: ${userName}`);
console.log(`Edad: ${edad} años`);
console.log("Películas favoritas:");

peliFav.forEach(function(movie) {
    console.log(`La película ${movie} es una de mis favoritas.`);
});

/**Highest number
Write a program that asks for 10 numbers. Using logical operators and any other javascript functions/structures you've seen before, 
determine and output the highest of those numbers.*/

let numerosAleatorios = [1,2,3,4,5,6,7,8,9,10];
let numMayor = numerosAleatorios[0];
numerosAleatorios.sort((a, b) => a - b);
for (let  i = 1; i <= numerosAleatorios.length; i++){
   if(numerosAleatorios[i] > numMayor){
    numMayor = numerosAleatorios[i];
   }
}
console.log(`el numero mas grande es ${numMayor}`);
/**Alarm
Write a program that asks a user for the amount of seconds needed until an alarm (message) is executed alongside a text to show once those seconds have passed in real time.

Result example: "Time for bed after 10 seconds".
*/


let second = 9
function getUser(){
    console.log(`Time for bed after  ${second} seconds`)
}
setTimeout(getUser, 4000);
function alarm (){
alert("alarma");
}
setTimeout(alarm, second * 1000)

/**Palindrome
Write a program that prompts for a word or sentence (it can be capitalized, have spaces and punctuation). Figure out if the sentence/word is a palindrome or not. Ignoring punctuation, spaces and capitalized letters.
*/

let oracion = ["o**s//o"];
oracion = oracion[0].split("").reverse().join("").replace(/[.,\/#!$%\^&\\\*;:{}=\-_`~(\s]/g, '');
const oracionAlreves = oracion[0].split("").reverse().join("").replace(/[.,\/#!$%\^&\\\*;:{}=\-_`~(\s]/g, '');
function palindrome(){
if (oracion[0] === oracionAlreves){
    console.log("is a palindrome");
}else{
    console.log("not a palindrome");
}
}
/** 
Factorial
Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
*/
let n = 5;
let numEnt = n;
function calcularFactorial(n){
    if (n === 1 || n === 0){
    return 1;
}else if(n > 1){
    return n * calcularFactorial(n-1)
}
}
if(numEnt > 1){
const factorial = calcularFactorial(n)
console.log(`el factorial de ${n} es ${factorial}`)
}else {
    console.log("no es entero")
}

/**Flat array
Write a program that takes the following nested matrix and flattens it (makes it a 1D array). Use any type of algorithm you want like callbacks, recursion, etc...
*/
