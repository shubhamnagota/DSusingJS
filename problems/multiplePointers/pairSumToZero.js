// Time Complexity is O(n^2)
const zeroPairNaiveApproach = (arr = []) => {
  if (arr.length === 0) return false;

  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];
    }
  }
  return "No pairs";
};

// Time Complexity is O(n)
const zeroPairRefactoredApproach = (arr = []) => {
  if (arr.length === 0) return false;

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) return [arr[left], arr[right]];
    if (sum < 0) left++;
    else right--;
  }
  return "No pairs";
};

const testCases = [
  [-3, -2, -1, 0, 2, 3],
  [-3, -2, -1, 0, 2],
  [-3, -2, -1, 0, 4, 5]
];

// let functionToBeUsed = zeroPairNaiveApproach;
let functionToBeUsed = zeroPairRefactoredApproach;
console.log(functionToBeUsed);
for (let testCase of testCases) {
  console.log("Input : ", testCase);
  console.log("Output : ", functionToBeUsed(testCase));
}
