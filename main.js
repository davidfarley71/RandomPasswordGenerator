//DOM elements
var resultElement = document.getElementById('result')
var lengthElement = document.getElementById('length')
var lowerElement = document.getElementById('lower')
var upperElement = document.getElementById('upper')
var numberElement = document.getElementById('number')
var symbolElement = document.getElementById('symbol')
var createElement = document.getElementById('create')
var copyElement = document.getElementById('copy')

//object containing functions
var options = {
    lower: lowerCaseLetters,
    upper: upperCaseLetters,
    number: randomNumber,
    symbol: randomSymbol 
}

//create password

createElement.addEventListener('click', () => {
    var length = lengthElement.value
    
    console.log(length)
})




// option functions

function lowerCaseLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function upperCaseLetters () {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomNumber () {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomSymbol () {
    var symbols = '!@#$%^&*()'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

