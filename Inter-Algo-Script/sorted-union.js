function uniteUnique(...arr) {
    const arr2 = []
  let newArr = arr[0].filter(num=>{
    if(arr2.indexOf(num)===-1){
        arr2.push(num)
        return num
    }
  })
console.log(newArr)

    for(let i=1;i<arr.length;i++){
      
        for(let j=0;j<arr[i].length;j++){
            // console.log(arr[i][j],i,j)
            // console.log(newArr.indexOf(arr[i][j])===-1)
            if(newArr.indexOf(arr[i][j])===-1){
                // console.log(arr[i][j])
                newArr.push(arr[i][j])
            }
        }
    }
    return newArr
  }
  
  console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]) )

