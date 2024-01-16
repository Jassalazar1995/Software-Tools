let str = "hello"

// Function: CapitalLetterenator
// Purpose: Converts the first letter of a given string to uppercase.
// Input: str - A string whose first letter needs to be capitalized.
// Returns: A string with the first letter capitalized.
function CapitalLetterenator(str) {
    // Convert the string into an array of characters.
    stringArray = [...str];

    // Capitalize the first character of the array.
    stringArray[0] = stringArray[0].toUpperCase();

    // Join the array back into a string.
    stringArray = stringArray.join('');

    // Return the modified string.
    return stringArray;
}

console.log(CapitalLetterenator(str)); // Outputs: "Hello"