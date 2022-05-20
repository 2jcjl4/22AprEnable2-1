'use strict';

// Selectors
// Inputs
let inputOne = document.querySelector("#inputOne");
let inputTwo = document.querySelector("#inputTwo");

// Buttons
let addBtn = document.querySelector("#addBtn");
let subBtn = document.querySelector("#subBtn");
let divBtn = document.querySelector("#divBtn");
let multiBtn = document.querySelector("#multiBtn");
let clearBtn = document.querySelector("#clearBtn");

// Divs
let mainDiv = document.querySelector("#mainDiv");

// Functionality
let add = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} + ${valueTwo} = ${valueOne + valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}
let sub = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} - ${valueTwo} = ${valueOne - valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}
let div = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} / ${valueTwo} = ${valueOne / valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}
let multi = () => {
    let valueOne = parseInt(inputOne.value);
    let valueTwo = parseInt(inputTwo.value);

    let valueDiv = document.createElement("div");
    let myValue = document.createTextNode(`${valueOne} * ${valueTwo} = ${valueOne * valueTwo}`);

    valueDiv.appendChild(myValue);
    mainDiv.appendChild(valueDiv);
}

let clearResults = () => {
    mainDiv.innerHTML = "";
}

// Event Listeners
addBtn.addEventListener("click", add);
subBtn.addEventListener("click", sub);
divBtn.addEventListener("click", div);
multiBtn.addEventListener("click", multi);
clearBtn.addEventListener("click", clearResults);