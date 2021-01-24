function myFunction(){ //Create function called "myFunction"
    var sentence= "Look at all the"; //Create variable called "sentence" and assign it a string value
    sentence += " cows on this farm."; //Use += expression to add string value to "sentence" variable
    document.getElementById("Concatenate").innerHTML = sentence; //Putting the value of "semtence" into HTML elements with "Concatenate" id
}