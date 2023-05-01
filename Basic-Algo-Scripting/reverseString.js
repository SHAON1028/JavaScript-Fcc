// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".
// 1
function reverseString(str) {
 
    let splt =  str.split('').reverse().join('')
   
   
   
   return splt;
   
   }
   
   reverseString("hello");

//    2
function reverseString(str) {
    console.log(str.split(''))
   let splt =  str.split('')
   let rev = ""
   for(let i = splt.length -1 ;i>=0;i--){
     rev+=splt[i]
   }
  return rev
  
  }
  
  reverseString("hello");