let apples: number = 5;
let speed: string = 'fast';
// console.log(typeof speed)
let hasName: boolean = true;

let nothingMuc: null = null;
let nothing: undefined = undefined;

// build in objects
let now: Date = new Date();

// array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Class
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


// when to use annotations
// 1) function that returns the 'any' type
const json = '{"x": 10, "y": 20}'
// const coordinates = JSON.parse(json) // infers type: any
const coordinates: {x: number; y: number } = JSON.parse(json) // fixes type any to have actual types
// type T14 = ReturnType<typeof coordinates>
// console.log(T14) // doesn't work :P
console.log(coordinates)

// 2) when we declare a variable on 1 line, and initialize later
let words = ['red', 'green', 'blue']
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
}

// 3) variable who's type cannot be inferred correctly
let numbers = [10, -1, 12]
let numberAboveZero: boolean | number = false;


for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] > 0) {
    numberAboveZero = numbers[i]
  }
}





