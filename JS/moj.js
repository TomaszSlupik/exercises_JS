/*Przedstawiamy się */
const name = "Tomek";
let age;
age = 28;
let dish = "Spaghetti";
const firstName = "Tomek";
console.log(`Mam na imię ${name}, mam ${age} i bardzo lubię ${dish}.`);

/*Działania na liczbach */
const add = 5 + 7;
console.log(`Wynik dodawania to: ${add}`);

const substract = 10 - 2;
console.log(`Wynik odejmowania to: ${substract}`);

const multiply = 9 * 9;
console.log(`Wynik mnożenia to: ${multiply}`);

const divide = 3 / 3;
console.log(`Wynik dzielenia to: ${divide}`);

const modulo = 15 % 7;
console.log(`Modulo wynosi: ${modulo}`);

let num = 7;
console.log(`Wynik będzie 7. Sprawdzenie: ${num}`);

num++;
num++;
num++;

console.log(`Wynik będzie 10. Sprawdzenie: ${num}`);

num--;

console.log(`Wynik będzie 9. Sprawdzenie: ${num}`);

/* Instrukcje warunkowe */
x = 8;
y = "8";

if (x == y) {
	console.log(`True`);
} else {
	console.log("False");
}

if (x === y) {
	console.log(`True`);
} else {
	console.log(`False`);
}

a = 10;
b = "-14";

if (a !== b) {
	console.log(`Yes`);
} else {
	console.log(`No!`);
}

let SCORE = 15 % 2;

console.log(`Jest to liczba nieparzysta. Mamy resztę z dzielenie ${SCORE}`);

let NUM1 = 8;
NUM1++;
NUM1++;
console.log(`Zwiększyliśmy o 2: ${NUM1}`);

let X = 5;
let Y = 10;
X *= Y;
console.log(`${X}`);

let A = 5;
let B = 10;
A /= B;
console.log(`${A}`);


const password = 12

if (password > 10) {
	console.log (`Masz bardzo dobre hasło`)
}

else if (password>=5) {
	console.log (`Dobre hasło`)
}

else {
	console.log(`Musisz zmienic hasło`)
}


/* TABLICE */

let colors = ['red', 'blue', 'green']


console.log (`Mój ulubiony kolor to: ${colors[1]}`)

colors.push ('gold', 'black') 

console.log (`Nasza lista powiększyła się: ${colors}`)

/* Pętla for */

for (let i = 0; i < 10; i++) {
	console.log(i)
}


let fruits = ['apple', 'plum', 'banana', 'tomato']

for (let i = 0; i < fruits.length; i++) {
	console.log (fruits [i])
}

/* Proste funkcje */

function addnumber (x,y) {
	return x + y
}


function test () {
	console.log (`Cześć`)
}

test()

function sub (a, b) {
	console.log (a - b)
}

sub (20, 9)


/*Dalsze zadania */

let numbers = [1, 2, 3, 4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
	console.log (numbers[i])
}

function three (a, b, c) {
	console.log (a + b * c)
}


three (1, 3, 3)


if (numbers.length > 5) {
	console.log (`True`)
}
else {
	console.log (`False`)
}

/*Pobieramy elementy */

const p = document.querySelector ('p')

console.log (p);


const charge = document.querySelector ('div.charge') 
console.log (charge)

const li = document.querySelectorAll ('li')
console.log (li)

console.log (li [0])


const btn1 = document.querySelector ('#btn1')
console.log (btn1)

const btn2 = document.querySelector ('.btn2')
console.log (btn2)


/* funkcja */

function first () {
	console.log (`Kliknięto przycisk numer 1`)
}

first ()

function second () {
	console.log (2 + 2)
}

/*Po kliknięciu */

btn1.addEventListener ('click', first) 
btn2.addEventListener ('click', second)