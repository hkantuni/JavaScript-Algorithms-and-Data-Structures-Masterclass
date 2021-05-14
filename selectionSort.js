///////////   Selection Sort: Implementation //////////

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let min = arr[i];
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (min > arr[j]) {
        min = arr[j];
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}

console.log(selectionSort([0, 8, 15, 20, 35, 5, 3, 4, 1, 2])); // [ 0, 1, 2, 3, 4, 5, 8, 15, 20, 35 ]

////////////// ES6 syntax with swap function //////////////////////

function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length - 1; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}

console.log(selectionSort([0, 8, 15, 20, 35, 5, 3, 4, 1, 2])); // [ 0, 1, 2, 3, 4, 5, 8, 15, 20, 35 ]
