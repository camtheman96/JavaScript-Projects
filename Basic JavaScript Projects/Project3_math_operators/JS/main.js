function operationstest_Function(){ //Defining a function and naming it
    var randomnumber = Math.random() * 3; //Defining variable "randomnumber" and assigning its a random number (0-3) with the math.Random operation
    var number1 = 6; //Defining variable "number1" and assigning its the number value 6
    var number2 = 10; //Defining variable "number2" and assigning its the number value 10
    var number3 = 8; //Defining variable "number3" and assigning its the number value 8
    var number4 = 3; //Defining variable "number4" and assigning its the number value 3
    var number5 = 32; //Defining variable "number5" and assigning its the number value 32
    var number6 = 15; //Defining variable "number6" and assigning its the number value 15
    var number7 = 2; //Defining variable "number7" and assigning its the number value 2
    number7++; //Increment variabe "number7"
    var number8 = 4; //Defining variable "number8" and assigning its the number value 4
    number8--;  //Decrement variabe "number8"
    var result = number1 + number2 / number3 * number4 + number5 % number6 - randomnumber + number7 - number8; //Defining variable "result" and assigning it the value of operations performed between variables "number1" to "number 8"
    document.getElementById("test").innerHTML = result; //Putting the value of "result" into HTML elements with "test"
}