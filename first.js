const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");
const choice = document.getElementById("choice");
const button = document.getElementById("button");
const calculateDisplay = document.getElementById("display");

button.addEventListener("click", function() {
    let result = 0;
    let newNumber1 = parseInt(number1);
    let newNumber2 = parseInt(number2);
    let newChoice = parseInt(choice);
    const message ="";

    switch(newChoice) {
        case 1:
             message = "total additions is : ";
            result = newNumber1 + newNumber2;
            break;  
    }

    calculateDisplay.innerHTML = message + result;
})