

alert('simple javascript arithemetics calculations')

// The Function to add five numbers are
function addNumbers(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}
  
// The Function to subtract four numbers are
function subtractNumbers(num1, num2, num3, num4) {
  return num1 - num2 - num3 - num4;
}
  
// The Function to multiply three numbers are
function multiplyNumbers(num1, num2, num3) {
  return num1 * num2 * num3;
}
  
// Function to divide two numbers
function divideNumbers(num1, num5) {
  if (num5 === 0) {
    return "Cannot divide by zero!";
  }
  return num1 / num5;
}
  
// Example usage
let number1 = 60;
let number2 = 40;
let number3 = 20
let number4 = 10
let number5 = 2
  
document.write("Addition: " + addNumbers(number1, number2, number3, number4, number5));
document.write('<br>');
document.write('<br>');
document.write("Subtraction: " + subtractNumbers(number1, number2, number3, number4));
document.write('<br>');
document.write('<br>');
document.write("Multiplication: " + multiplyNumbers(number1, number2, number3));
document.write('<br>');
document.write('<br>');
document.write("Division: " + divideNumbers(number1, number2));
  
  