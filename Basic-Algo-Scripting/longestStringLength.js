// Find the Longest Word in a String
// Return the length of the longest word in the provided sentence.

// Your response should be a number.
// my
function findLongestWordLength(str) {
    let len = 0;
    let splt = str.split(" ")
    for(let i = 0;i<splt.length; i++){
      if(len<splt[i].length)
      len = splt[i].length
    }
    return len;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//   reduce

function findLongestWordLength(s) {
    return s
      .split(' ')
      .reduce((longest, word) => Math.max(longest, word.length), 0);
  }

//   map
function findLongestWordLength(str) {
    return Math.max(...str.split(" ").map(word => word.length));
  }