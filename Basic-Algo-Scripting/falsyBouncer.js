// function bouncer(arr) {
//     const testArr = []
//     for(let i = 0; i<arr.length;i++){
//         if(arr[i]){
//           testArr.push(arr[i])
//         }
//     }
//     console.log(testArr)
//     return testArr;
//   }
  
//   bouncer([7, "ate", "", false, 9]);

//   2
function bouncer(arr) {
    return arr.filter(Boolean);
  }
  console.log( bouncer([7, "ate", "", false, 9]))