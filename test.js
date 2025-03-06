function oddEven(number){
    const even ="this number is even";
    const odd = "this number is odd";
    const result = number % 2 == 0 ? even : odd;
    console.log(result);
}

const number = 4;
oddEven(number);