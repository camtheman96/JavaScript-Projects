function comparisontypesFunction(){ //Defining a function and naming it
var coercion = (5 + "5"); //Defining variable "coercion"
var typeOf = (typeof "Text"); //Defining variable "typeOf"
var double = (10 == 8); //Defining variable "double"
var X = 77; //Defining variable "X"
var Y = 77; //Defining variable "Y"
var triple1 = (X === Y); //Defining variable "triple"
var A = "1"; //Defining variable "A"
var B = 1; //Defining variable "B"
var triple2 = (A === B); //Defining variable "triple2"
var C = 3; //Defining variable "C"
var D = 4; //Defining variable "D"
var less = (C < D); //Defining variable "less"
var E = 99; //Defining variable "E"
var F = 200; //Defining variable "D"
var greater = (E > F); //Defining variable "greater"
var and = (10 > 8 && 6 > 11); //Defining variable "and"
var or = (32 > 1 || 1 > 130 ); //Defining variable "or"
var G = 18; //Defining variable "G"
var F = 20; //Defining variable "F"
var not = !(G > F); //Defining variable "not"
document.getElementById("element").innerHTML = document.write(coercion + "<br>") + document.write(typeOf + "<br>") + document.write(double+ "<br>")
 + document.write(triple1 + "<br>") + document.write(triple2 + "<br>") + document.write(less + "<br>") + document.write(greater + "<br>") + 
 document.write(and+ "<br>") + document.write(or + "<br>") + document.write(not + "<br>"); 
 //Print the value of all the variables and store it in id "element"
}