// * OBJECT EXERCISES

/**
 * Create an object called person that has three properties, firstName, 
 * lastName, and age. Write each property on its own line. Use console.log() to 
 * print out the object.
 */
function createObject() {
    const person = {
        firstName : "Greg",
        lastName : "Gregworth",
        age : 40
    };
    console.log(person);
}   

/**
 * Create an object called person2 that has three properties, firstName, 
 * lastName, and age. Write the entire object on the same line.
 * Use console.log() to print out the object. 
 */
function createObject2() {
    const person2 = {firstName : "Greg", lastName : "Gregerson", age: 50};
    console.log(person2);
}

/**
 * Given the following object, instructor, access each of its propertiy values 
 * by using console.log(). Do not use console.log() on instructor, only its 
 * properties.
 */
function printProperties() {
    const instructor = {
        "first name" : "Graham",
        "last name" : "Eichstaedt"
    };
    console.log(instructor["first name"] + " " + instructor["last name"]);
}

/**
 * Given the following object, add a method to the object that prints the 
 * intructors full name using the values of the object's firstName and lastName 
 * properties.
 */
function addMethod() {
    const instructor1 = {
        firstName : "Joel",
        lastName : "Gill",
        printFullName : function() {
            console.log(this.firstName + " " + this.lastName);
        }
    } 
};

/**
 * Given the following object, use its method both with and without the p
 * parentheses ().
 * 
 * ? What is the difference between using the method with and without the 
 * ? parentheses()? 
 */
function useMethod() {
    const myDogSimba = {
        name : "Simba",
        breed : "Belgian Malinois",
        hobby : "Biting",
        speak : function() {
            return "Woof!";
        }
    };    
    console.log(myDogSimba.speak);
    console.log(myDogSimba.speak());
}




