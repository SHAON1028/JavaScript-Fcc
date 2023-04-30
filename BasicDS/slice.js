//  slice() takes only 2 parameters — the first is the index at which to begin extraction, and the second is the index at which to stop extraction (extraction will occur up to, but not including the element at this index). 

// let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

// let todaysWeather = weatherConditions.slice(1, 3);
// console.log(weatherConditions)
// console.log(todaysWeather)

function forecast(arr) {
    // Only change code below this line
   
    return  arr.slice(2,4);
  }
  
  // Only change code above this line
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));