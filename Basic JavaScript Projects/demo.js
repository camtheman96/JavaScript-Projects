function Car_Question_Function() { //Defining a function and naming it
    var question = "Which car brand is the best? <br>";//Defining a variable and giving it a string value
    var str = "Audi is the best car brand!"; //Defining a variable and giving it a string value
    var result = question + str; //Defining the "result" variable as adding the string variables "question" and "str"
    document.getElementById("Question_Answer").innerHTML = result; //Putting the value of result into HTML elements with "Question" id and BestCarBrand" id
}