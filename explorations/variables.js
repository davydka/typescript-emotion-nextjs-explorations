var apples = 5;
var speed = 'fast';
// console.log(typeof speed)
var hasName = true;
var nothingMuc = null;
var nothing = undefined;
// build in objects
var now = new Date();
// array
var colors = ['red', 'green', 'blue'];
var myNumbers = [1, 2, 3];
var truths = [true, true, false];
// Class
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// object literal
var point = {
    x: 10,
    y: 20
};
// function
var logNumber = function (i) {
    console.log(i);
};
// when to use annotations
// 1) function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(typeof coordinates);
console.log(coordinates);
