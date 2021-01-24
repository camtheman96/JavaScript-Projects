function myDictionary() {   //Defining a function and naming it
    var Animal = {          //Defining the variable "Animal" and assign it a dictionary of key value pairs
        Species: "Dog",     //Define a key value pair
        Color: "Black",     //Define a key value pair
        Breed: "Labrador",  //Define a key value pair
        Age: 5,             //Define a key value pair
        Name: "Riley",      //Define a key value pair
    };
    delete Animal.Name;     //Delete "Name" key value pair
    document.getElementById("Dictionary").innerHTML = Animal.Name; //Putting the value of "Name" in the dictionary "Animal" into HTML elements with "Dictionary"
}