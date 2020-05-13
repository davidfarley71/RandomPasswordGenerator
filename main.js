//DOM elements
var resultElement = document.getElementById('result')
var lengthElement = document.getElementById('length')
var lowerElement = document.getElementById('lower')
var upperElement = document.getElementById('upper')
var numberElement = document.getElementById('number')
var symbolElement = document.getElementById('symbol')
var createElement = document.getElementById('create')
var copyElement = document.getElementById('copy')
var img1 = document.getElementById('img1')
var fireworks = document.getElementById('fireworks');
//object containing functions
var options = {
    lower: lowerCaseLetters,
    upper: upperCaseLetters,
    number: randomNumber,
    symbol: randomSymbol
}

//button function

createElement.addEventListener('click', () => {
    var length = parseInt(lengthElement.value)
    var isLower = lowerElement.checked
    var isUpper = upperElement.checked
    var isNumber = numberElement.checked
    var isSymbol = symbolElement.checked

    resultElement.innerText = createPassword(isLower, isUpper, isNumber, isSymbol, length)
   
})

//copy to clipboard
// test test
copyElement.addEventListener('click', () => {
    var textArea = document.createElement('textarea')
    var password = resultElement.innerText

    if(!password){
        return;
    }

    textArea.value = password
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    textArea.remove()
    alert("Password has been copied")
})

//create password

function createPassword(lower, upper, number, symbol, length) {
    // initilize password variable
    // filter out unchecked types
    // loop over length call generator function for each type
    // add final password to the password variable and return it

    var createdPasswordvar = ''

    var checkedCount = lower + upper + number + symbol

    //console.log(checkedCount)

    var checkedArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

    //console.log('arrtype:', checkedArr)

    if(checkedCount === 0){
        return 'please select an option'
    }
    //change background image
    img1.style.backgroundImage = "url('assets/images/happy.jpg')";
    //show copy button
    copyElement.style.display = "inline";
    //turn on the fireworks
    // document.getElementById("willbefireworks").className = 'pyro';
    fireworks.className = 'pyro'
    for (let i = 0; i < length; i += checkedCount){
        checkedArr.forEach(type => {
            var optionName = Object.keys(type)[0]
            //console.log(optionName)

            createdPasswordvar += options[optionName]();
        });
    }

    var fullPassword = createdPasswordvar.slice(0, length)
    return fullPassword
}

// option functions

function lowerCaseLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function upperCaseLetters() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomSymbol() {
    var symbols = '!@#$%^&*()'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

