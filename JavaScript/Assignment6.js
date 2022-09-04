/*
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
        1. Add an area() method to the Rectangle class.
        2. Create a Square class that satisfies the following conditions:
        ○ It is a subclass of Rectangle.
        ○ It contains a constructor and no other methods.
        ○ It can use the Rectangle class' area method to print the area
        of a Square object.
*/

class Rectangle {
    constructor(length, width){
        this.length = length;
        this.width = width;
        
    }
    get area(){
        return this.calcArea
    }

    calcArea(){
        return this.length * this.width
    }
}

class Square extends Rectangle {
    constructor(length, width){
        super(length, width);
        this.length = length;
        this.width = width
    }
}

let square = new Square(6, 6);
let area = square.area()
console.log(area);


/*
2) Write a javascript function find_largest to return the nth largest number in an array
*/

const findNthLargest = (nums, nthLarge) => {
    let sorted = nums.sort((num1, num2) => num1 - num2);
    console.log(sorted[nthLarge - 1]);
}

findNthLargest([ 2, 5, 8, 1], 3);


/*
Write a JavaScript program which accept a number as input in the function parameter and insert dashes (-) between each two even numbers.
*/

const insertDash = (num) => {
    let str = num.toString();
    let result = [str[0]];

    for(let i=1; i < str.length; i++ ){
        if( (str[i - 1] % 2 ===0) && (str[i] % 2 === 0)){
            result.push('-', str[i])
        } else
            result.push(str[i])
    }

    console.log(result.join(''));
}

insertDash(34689454)