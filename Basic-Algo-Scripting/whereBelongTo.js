function getIndexToIns(arr, num) {
  arr2 = arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr2);
  for (let i = 0; i < arr2.length; i++) {
    if (arr2[i] === num) return i;
    else if (arr2[i] > num) {
      return i;
    }
  }
  return arr2.length;
}

console.log(getIndexToIns([5, 3, 20, 3], 5));
