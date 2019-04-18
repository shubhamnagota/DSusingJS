// Time Complexity is O(n^2)
const maxSubarraySumNaiveApproach = (arr = [], num) => {
  if (num > arr.length) return "Not enough elements";

  let maxSum = -Infinity;

  for (let i = 0; i < arr.length - num + 1; i++) {
    let temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }

    if (temp > maxSum) maxSum = temp;
  }

  return maxSum;
};

// Time Complexity is O(n)
const maxSubarraySumRefactoredApproach = (arr = [], num) => {
  if (num > arr.length) return "Not enough elements";

  let maxSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
};

const testCases = [
  [[1, 2, 3, 2, 5, 7, 1], 2],
  [[1, 2, 3, 2, 1, 3, 4, 5, 2, 1, 3], 4],
  [[1, 2, 3, 2, 1, 3, 4, 5, 2, 1, 3], 6],
  [[1, 2, 3, 2, 1, 3, 4, 5, 2, 1, 3], 2],
  [[1, 2, 3, 2, 1, 3, 4, 5, 2, 1, 3], 1],
  [[1, 2, 3, 2, 1, 3, 4, 5, 2, 1, 3], 4],
  [[], 4],
  [[1, 2, 3, 2, 1, 3, 4, 5, 2, 1, 3], 3]
];

// let functionToBeUsed = maxSubarraySumNaiveApproach;
let functionToBeUsed = maxSubarraySumRefactoredApproach;
console.log(functionToBeUsed);
for (let testCase of testCases) {
  [a, b] = testCase;
  console.log("Input : ", a, b);
  console.log("Output : ", functionToBeUsed(a, b));
}
