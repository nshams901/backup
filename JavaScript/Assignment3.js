/*Using for loops, write a Javascript program to output the following
pattern -
1
2 3
4 5 6
7 8 9 10
*/

const printPattern = (n) => {
    let digit = 1;
    for(i=1; i<n; i++){
        let str = '';
        for(let j=0; j< i; j++){
            str += digit++ + ' '
        }
        console.log(str);
    }
}

printPattern(9)

/*
Write a program to find whether a given number is armstrong number or not-
The Armstrong number is a number that is equal to the sum of cubes of its digits.
*/

const checkArmstrongNo = (number) => {
    let num = number
    let ans = 0;
    while(num > 0){
        let digit = (num % 10);
        ans += Math.pow(digit, 3);
        num = Math.floor(num / 10)
    }
    if( ans === number)
        console.log(number + ' is a armstrong number');
}

checkArmstrongNo(153);


/*
Write a program to find whether a given number is special number or not-
If the sum of the factorial of digits of a number (N) is equal to the number itself, the number (N) is called a special number.
*/

const checkSpecialNo = (number) => {

    let ans = 0;
    let num = number
    while(num > 0){
        let digit = num % 10;
        ans += findFactorial(digit);
        num = Math.floor( num / 10);
    }
    if( ans === number)
        console.log(number + " is a special number");
}

const findFactorial = (num) => {
    if( num === 1)
        return 1;
    return num * findFactorial(num - 1)
}

checkSpecialNo(145);