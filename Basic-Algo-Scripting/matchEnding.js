// Confirm the Ending
// Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
    const pattern = new RegExp(target + "$")
   
    return pattern.test(str);
  }
  
  confirmEnding("Bastian", "n");

//   2
function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
  
    return str.slice(str.length - target.length) === target;
  }
  
  confirmEnding("He has to give me a new name", "name");

//   3
function confirmEnding(str, target) {
    return str.slice(-target.length) === target
  }
  
  confirmEnding("Bastian", "n");