//////////////    Insertion Sort: Implementation   ///////////////

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i - 1; j < arr.length && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue; // var used to change j out of block
  }
  return arr;
}

console.log(insertionSort([2, 1, 9, 76, 4]));
