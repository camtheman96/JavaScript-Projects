window.alert("Alert! Click here to continue.");
document.write("\"I found a cat, \ I named the cat Billy, \ and next thing I knew,\ <br> \ he ate my left over pasta!\"<br><br>"); //Display a quote with quotation marks and seperate each part of the quote
document.write("\"Do as I say," + " not as I do\"" + " -Someone giving you bad advice\<br><br>"); //Display a quote and seperate the portions using the addition method
var A =("fire" + "truck"); //Assign variable A with a concatenated string value
document.write(A + "<br><br>"); //Display the concatenated variable
var brands = "Car Brands", car1="VW", car2="Ford", car3="Ferrari", car4="Dodge", car5="Honda", car6="BMW"; //Assign multiple variables in one statement
document.write(car3 + "<br><br>"); //Display the string for the variable car3
document.write(5 + 19 + "<br><br>"); //Display example of expression by addition
var blues = "I have the blues."; //Assign text to string variable "blues"
var blues = blues.fontcolor("blue"); //Assign blue color to string variable "blues"
document.write(blues + "<br><br>"); //Display string variable "blues"

function My_First_Function() { //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giing it a string value
    var result = str.fontcolor("green"); //Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; //Putting the value of result into HTM element with "Green_Text" id
}