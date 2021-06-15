/*
  Use Kadane's Algorithm - Scan the entire array and at each position
  find the maximum sum of the subarray ending there. This is achieved by 
  keeping a current_max for the the current index and a global_max

  currentMax = A[0]
  globalMax = A[0]
  for i = 1 -> size of A
    if currentMax is less than 0
      then currentMax = A[i]
]   otherwise
      currentMax = currentMax + A[i]
    if globalMax is less then currentMax
      then globalMax = currentMax
*/


function largestSubarraySum(array) {
  if (array.length < 1) {
    return 0;
  }

  const isLessThenZero = currentValue => currentValue < 0;
  if (array.every(isLessThenZero)) {
    return 0;
  }

  let currentMax = array[0];
  let globalMax = array[0];
  
  for (let i = 1; i < array.length; i++) {
    if (currentMax < 0) {
      currentMax = array[i]
    } else {
      currentMax += array[i]
    }

    if (globalMax < currentMax) {
      globalMax = currentMax
    }
  }
  return globalMax;
}


