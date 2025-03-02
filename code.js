const choice = prompt("enter the operatos value : (for calculate : 1, for factorail : 2, for prime number : 3, for decimal to binnary : 4)");
if (choice == 1) {
    const number1 = prompt("enter the first number : ");
    const number2 = prompt("enter the second number : ");

    const operator = prompt("enter the operator value : (for addtions : +, for substractions : -, for multiplication : *, for division : /)");
    let result = 0;

    let newNumber1 = parseInt(number1);
    let newNumber2 = parseInt(number2);
    
    const displayCalculate = document.getElementById("output");

    switch(operator) {
        case "+":
            result = newNumber1 + newNumber2;
            console.log("total additons is : " + result);
            const message = "total additons is : ";
            displayCalculate.innerHTML = message + result;
            break;
        case "-":
            result = newNumber1 - newNumber2;
            console.log("total substraction is : " + result);
            break;
        case "*":
                result = newNumber1 * newNumber2;
                console.log("total multiplication is : " + result);
                break;
        case "/":
                result = newNumber1 / newNumber2;
                console.log("total divisoin is : " + result);
                break;
    }
} else if(choice == 2) {
    const number = prompt("enter the number for factorial : ");
    const newNumber = parseInt(number);
} else {
    console.log("please enter the valid number : ");
}