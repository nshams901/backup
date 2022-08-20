// Write a program to find a given year is a leap year or not.

const findLeapYear = (year) => {
    // check century years
    let isCenturyYear = year % 100 === 0;

    if (year % (isCenturyYear ? 400 : 4) === 0) {
        console.log(`${year} is a leap year`);
    } else
        console.log(`${year} is not a leap year`);
}

findLeapYear(2000);


//Write a program to convert temperatures to and from celcius

const convertToF = (value) => {
    let f = 9 * (value / 5) + 32;
    console.log(f + ' F');
}
const convertToC = (value) => {
    let c = 5 * (value - 32) / 9;
    console.log(c + ' C');
}

const tempConverter = (value, unit) => {
    unit === 'c' || 'C' ? convertToF(value) : unit === 'f' || 'F' ? convertToC(value)
        : console.log('Please enter correct unit');
}

tempConverter(60, 'C');


//Write a program to find the factorial of a number

const findFactorial = (number) => {
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result = result * i;
    }

    console.log(result);
}

findFactorial(10);