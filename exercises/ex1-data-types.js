// * DATA TYPE EXERCISES
// We have 8 Data Types: Number, String, Boolean, Bigint, Undefined, Null, Symbol, and Object

// * Strings

/**
 * Create a variable called doubleQuotes with any string value, but the string 
 * must be created using double quotes.
 */
function doubleQuotes() {
    let doubleQuotes = "This is a string made using double quotes";
}

/**
 * Create a variable called singleQuotes with any string value, but the string
 * must be created using single quotes.
 */
function singleQuotes() {
    let singleQuotes = "This is a string made using single quotes";
}

/**
 * Create a variable called yourFullName and assign it a value of your full
 * name. Then create another variable called backtickString and assign it a 
 * value of `Hi, my name is:` followed by your fullname. You should insert
 * yourFullName rather than append it.
 */
function backtickString() {
    let yourFullName = 'Graham Scott Eichstaedt';
    let backtickString = `Hi my name is ${yourFullName}`;
}

/**
 * Create three variables. The first should be called example1 and should have a
 * value of "Hello world". The second should be example2 with a value of 50. The
 * third should be example3 with a value of 50. 
 * 
 * Once you have created all three variables, add example2 and example3 to 
 * example1, then use console.log() to print out the value of example1.
 */
function concatenate() {
    let example1 = "Hello world";
    let example2 = 50;
    let example3 = 50;
    // String is first
    // Concatenate 50
    // Concatenate 50 again
    console.log(example1 + example2 + example3 );
}

/**
 * Create two variables. The first should be called example1 and should have 
 * a value of "Hello world". The second should be example2 with a value of 50. 
 * 
 * 
 * Once you have created the variables, add example1 to example2, then use 
 * console.log() to check the value example2.
 * 
 * ? How is it different from the last exercise?
 */
function addNumberAndString() {
    let example1 = "Hello world";
    let example2 = 50;
    console.log(example2 + example1)
}


/**
 * Create three variables. The first should be called example1 and should have 
 * a value of "Hello World". The second should be example2 with a value of 50. 
 * The third should be example3 with a value of 50.
 * 
 * Once you have created the three variables, use console.log() to add example3,
 * example2, and example1 together in that order. 
 * 
 * ? How is the answer different than in the past?
 */
function addNumberStringAndNumber() {
    let example1 = "Hello world";
    let example2 = 50;
    let example3 = 50;
    console.log(example3 + example2 + example1);
}

// * Numbers

/**
 * Create a variable of a number using decimal points. For example, 3.1415.
 * Use console.log() to print the value of the variable.
 */
function createFloat() {
    let pi = 3.14;
    console.log(pi);
}

/**
 * Create a variable of a whole number, like 3, 4, or 5. Use console.log() to 
 * print out the variable's value. 
 * 
 * The Number type can hold either integers or floats in JavaScript, unlike most
 * programming languages.
 */
function createInteger() {
    let integer = 5;
    console.log(integer);
}

/**
 * Create a variable of a number using exponential notation. For example, 
 * 150,000 would be the same as 15e4. Use console.log() to print out the 
 * variable's value.
 */
function exponential() {
    let exp = 213e5;
    console.log(exp);
}

// * Booleans

/**
 * Create a variable holding a boolean value of true. Use console.log() to 
 * print out the variable's value.
 */
function createBoolean() {
    let bool = true;
    console.log(bool);
}

/**
 * Create a variable holding a boolean value of false. Use console.log() to
 * print out the variable's value.
 */
function createBoolean2() {
    let bool = false;
    console.log(bool);
}

// * Objects

/**
 * Create a variable called meObject and assign it to an object that represents 
 * yourself (name, age, hairColor).
 * 
 * Once you have created the object, use console.log() to print out each
 * of the values of the object's properties.
 */

function createMeObject() {
    // TODO Write your answer here
    const meObject = {
        name : "Graham Eichstaedt",
        age : 24,
        hairColor : "Blonde"
    };
    console.log(meObject.name);
    console.log(meObject.age);
    console.log(meObject.hairColor);
}



// * Undefined

/**
 * Create a variable called unassigned, but do not assign a value to it.  Use 
 * console.log() to find the value of unassigned.
 */
function createUndefined() {
    // TODO Write your answer here
    let unassigned;
    console.log(unassigned);
}

/**
 * Given a variable called dog, use undefined to clear the variable. Once you
 * have cleared the variable, use console.log() to find the value of dog.
 */
function useUndefined() {
    let dog = {name: "Simba", age: 2, breed:"Belgian Malinois"};
    // TODO Write your answer here
    dog = undefined;
    console.log(dog);
}

// * Null

/**
 * Given a variable called person, use null to clear the variable. Once you 
 * have cleared the variable, use console.log() to find the value of person.
 */
function useNull() {
    let person = { name: "Eggbert" };
    // TODO Write your answer here
    person = null;
    console.log(person);
    return 0;
}
