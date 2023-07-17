//Write a javascript function to check whether a triangle is equilateral, isosceles or scalene


const checkTriangles = (side1, side2, side3) => {
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side1) {
        return console.log('This no triangle');
    } else
        checkTriangleType(side1, side2, side3)
}

const checkTriangleType = (side1, side2, side3) => {
    if (side1 === side2 && side2 === side3) {
        return console.log('This is a equilateral triangle');
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return console.log('This is a isosceles triangle');
    } else
        console.log('This is a scalene triangle');
}

checkTriangles(10, 10, 12);


/*

Write a function using switch case to find the grade of a student based
on marks obtained
a. “S grade” if the marks are between 90 and 100.
b. “A grade” if the marks are between 80 and 90.
c. “B grade” if the marks are between 70 and 80.
d. “C grade” if the marks are between 60 and 70.
e. “D grade” if the marks are between 50 and 60.
f. “E grade” if the marks are between 40 and 50.
g. “Student has failed” if the marks are between 0 and 40.
h. Else output “Invalid marks”.

*/

const gradeCheck = (marks) => {

    switch (true) {
        case 90 <= marks && marks <= 100:
            console.log('S grade');
            break;
        case 80 <= marks:
            console.log('A grade');
            break;
        case 70 <= marks:
            console.log('B grade');
            break;
        case 60 <= marks:
            console.log('C grade');
            break;
        case 50 <= marks:
            console.log('D grade');
            break;
        case 40 <= marks:
            console.log('E grade');
            break;
        case 0 <= marks:
            console.log('Student has failed');
            break;
        default:
            console.log('Invalid marks');
    }

}

gradeCheck(16);



// Write a JavaScript program to find the sum of the multiples of 3 and 5 under 1000

const totalSum = () => {
    let total = 0;
    for( let i = 1; i < 1000; i++){
        if(i % 3 === 0 && i % 5 === 0){
            total += + i;
        }
    }
    console.log(total);
}

totalSum();



/*
Write a program to find the factorial of all prime numbers between a given range . Range will be passed as 2 values in the function parameters. eg- if it is needed to find the values for numbers 1-100, then function declaration can look like - function prime(1,100).
*/


const prime = (a, b) => {
    for (let i = a; i <= b; i++) {
        if (i === 1) {
            continue;
        }
        if (i === 2) {
            console.log('factorial of prime number 2 is 2');
        }
        if (i % 2 !== 0) {
            let isPrime = true;
            for (let j = 2; j < i; j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                findFactoriaL(i)
            }
        }

    }
}

const findFactoriaL = (number) => {
    let factorial = 1
    for (let i = 1; i <= number; i++) {
        factorial *= i
    }
    console.log(`Factorial of prime number ${number} is ${factorial}`);
}

// prime(1, 40)