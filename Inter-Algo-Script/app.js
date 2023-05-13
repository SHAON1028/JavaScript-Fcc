function myReplace(str, before, after) {
    let newStr = str.split(" ")
   
    const idx = newStr.indexOf(before)

    if(newStr[idx][0]===before[0].toUpperCase()){
        newStr[idx] = after[0].toUpperCase()+ after.slice(1)
    }
    else{
        newStr[idx] = after.toLowerCase()
    }
    return newStr.join(' ');
  }
  
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");