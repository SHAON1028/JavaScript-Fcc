function titleCase(str) {
    let splitStr = str.split(' ')
    for(let i = 0;i<splitStr.length;i++){
        // splitStr[i] = splitStr[i].toLowerCase()
        splitStr[i] =  splitStr[i][0].toUpperCase() + splitStr[i].slice(1).toLowerCase()
    }
    console.log(splitStr)
    return splitStr.join(" ");
  }
  
 console.log( titleCase("sHoRt AnD sToUt"))

//  Regex

function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(^|\s)\S/g, L => L.toUpperCase());
  }