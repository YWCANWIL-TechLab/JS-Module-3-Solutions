// * FUNCTION EXERCISES

// * Syntax & Declaration

// TODO Create an empty function called myEmptyFunction


// ! The formula is: C = (F - 32) * (5/9)
/**
 * Create a function that prints a temperature in Fahrenheit as a temperature 
 * in Celsius.
 * 
 * ! The formula is: C = (F - 32) * (5/9)
 * 
 * @param {Number} tempInFahrenheit 
 */
function convertFahrenheitToCelsius(tempInFahrenheit) {
    let tempInCelsius = (tempInFahrenheit - 32) * (5/9);
    return tempInCelsius;
}

// ! The formula is: F = (C * (9/5)) + 32
/**
 * Create a function that prints a temperature in Celsius as a temperature in
 * Fahrenheit.
 * 
 * ! The formula is: F = (C * (9/5)) + 32
 * @param {*} tempInCelsius 
 */
function convertCelsiusToFahrenheit(tempInCelsius) {
    let tempInFahrenheit = (tempInCelsius * (9/5)) + 32;
    return tempInFahrenheit;
}

/**
 * Given a String called name, print out name.
 * 
 * @param {String} name 
 */
function printName(name) {
    // TODO Finish the function
    console.log(name);
}


// * Invoking (Calling) a Function

/**
 * Create a variable called result equal to 
 * convertFahrenheitToCelsius(tempInFahrenheit). Then log result to the console.
 */
function storeFunctionResult() {
    let result = convertFahrenheitToCelsius(50);
    console.log(result);
}


// * Return Values

/**
 * Given a parameter, return that parameter. The parameter's name is 
 * test.
 * 
 * @param {*} test 
 * @returns {*} test
 */
function testFunction(test) {
    return test;
}

// * Scope

/**
 * Create a function inside of useLocalVariableGlobally. Inside of the function 
 * you created, create a variable of any kind. 
 * 
 * Attempt to console.log() that variable outside of that function, but still 
 * inside of the useLocalVariableGlobally.
 * 
 * ? What happens?
 */
function useLocalVariableGlobally() {

    function test() {
        let localVariable = "howdy";
    }
    console.log(localVariable);
}

// * Function() vs Function

/**
 * Create two variables. One should be called invocation and the other should 
 * be called definition. Set invocation equal to testFunction(test). Set 
 * definition equal to testFunction.
 * 
 * Use console.log() to print out both variables.
 * ? What is the difference between the two values?
 */
function invocationVsDefinition() {
    // TODO Finish the function
    let invocation, definition;
    invocation = testFunction(test);
    definition = testFunction;
}
