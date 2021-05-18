////////  Merging Sort: Implementation /////////////

// function that marges 2 arrays ////////

function merge(arr1, arr2) {
  let arr = [],
    i = 0,
    j = 0;

  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j] || arr2[j] === undefined) {
      arr.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j] || arr1[i] === undefined) {
      arr.push(arr2[j]);
      j++;
    }
  }

  return arr;
}

///  complete merge sort recursive ////////
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([1, 10, 50, 2, 14, 99, 100]));
