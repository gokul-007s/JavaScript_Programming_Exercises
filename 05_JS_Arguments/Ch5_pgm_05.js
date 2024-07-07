// Using the square function

var square;

square = function (numberToSquare) {
  var result;
  result = numberToSquare * numberToSquare;
  console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};

square(10);
square(-2);
square(1111);
square(0.5);

var cube
cube = function (numberTocube) {
  var result;
  result = numberTocube * numberTocube* numberTocube;
  console.log(numberTocube + " * " + numberTocube + " * " + numberTocube +  " = " + result);
};
cube(9)
cube(18)
cube(73)

var squareRoot = function (squareRoot) {
  var result;
  result = Math.sqrt(squareRoot);
  console.log("the squareRoot of " + squareRoot + " is" + result);
};
squareRoot(9);
squareRoot(18);
squareRoot(21);

/* Further Adventures
 *
 * 1) Define a cube function that cubes
 *    any number passed in as an argument.
 *
 * 2) Call your cube function four times
 *    with different arguments to test it.
 *
 * Math.sqrt is a built-in function to find
 * the square root of a number.
 * e.g. Math.sqrt(9) finds the square root of 9.
 *
 * 3) Define and test a squareRoot function
 *    to find square roots and display
 *    them on the console.
 *    e.g. The square root of 9 is 3.
 *
 */
