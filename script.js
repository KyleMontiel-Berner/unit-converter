

/*1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound*/

let length1 = document.querySelector("#length");
let volume = document.querySelector("#volume");
let mass = document.querySelector("#mass");
let btnConverter = document.querySelector("#btnConverter");
let userInput = document.querySelector("#userInput");

btnConverter.addEventListener('click', ()=>
    renderConversion(userInput.value))

function renderConversion(num) {
    let feet = (num * 3.281).toFixed(3);
    let meters = (num / 3.281).toFixed(3);
    let gallons =(num * .264).toFixed(3);
    let liters =(num / .264).toFixed(3);
    let kilos = (num / 2.204).toFixed(3);
    let pounds = (num * 2.204).toFixed(3);

    length1.textContent = `${num} meters = ${feet} feet | ${num} feet = ${meters} meters`;
    volume.textContent = `${num} liters = ${gallons} gallons | ${num} gallons = ${liters} liters`;
    mass.textContent = `${num} kilos = ${pounds} pounds | ${num} pounds = ${kilos} kilos`;
}

