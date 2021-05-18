////////  Merging Sort: Implementation /////////////

// function that marges 2 arrays ////////

// Merging Arrays Pseudocode
// - Create an empty array, take a look at the smallest values in each input array
// - While there are still values we haven't looked at...
//      - If the value in the first array is smaller than the value in the second array,
//          push the value in the first array into our results and move on to the next value in the first array
//      - If the value in the first array is larger than the value in the second array,
//          push the value in the second array into our results and move on to the next value in the second array
//      - Once we exhaust one array, push in all remaining values from the other array

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
