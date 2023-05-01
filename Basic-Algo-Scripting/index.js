function chunkArrayInGroups(arr, size) {
    let temp = []
    while(arr.length>0){
    temp.push(arr.splice(0,size))
    }
    return temp;
  }
  
 console.log( chunkArrayInGroups(["a", "b", "c", "d"], 2))