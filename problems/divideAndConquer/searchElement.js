// Time Complexity is O(n)
const searchElementNaiveApproach = (arr = [], num) => {
  if (arr.length === 0) return "Not enough elements";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) return i;
  }

  return "Not Found";
};

// Time Complexity is O(n) or less than O(n) or O(1)
const searchElementRefactoredApproach = (arr = [], num) => {
  if (arr.length === 0) return "Not enough elements";

  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] < num) end = middle - 1;
    else if (arr[middle] > num) start = middle + 1;
    else return middle;
  }
  return "Not Found";
};

const testCases = [
  [[1, 2, 3, 4, 5, 7, 10], 2],
  [[1, 2, 3, 4, 5, 7, 10], 10],
  [[1, 2, 3, 4, 5, 7, 10], 1],
  [[1, 2, 3, 4, 5, 7, 10], 4],
  [[], 4],
  [[1], 4]
];

// let functionToBeUsed = searchElementNaiveApproach;
let functionToBeUsed = searchElementRefactoredApproach;
console.log(functionToBeUsed);
for (let testCase of testCases) {
  [a, b] = testCase;
  console.log("Input : ", a, b);
  console.log("Output : ", functionToBeUsed(a, b));
}
