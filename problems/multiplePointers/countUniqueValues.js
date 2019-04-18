// Time Complexity is O(n)
const countUniques = (arr = []) => {
  if (arr.length === 0) return 0;

  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(arr);
  return i + 1;
};

const testCases = [
  [1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 5, 5, 5, 7, 58, 58],
  [1, 1, 1, 3, 4, 5, 5, 6, 6],
  [],
  [1, 2, 3, 4, 5]
];

let functionToBeUsed = countUniques;
console.log(functionToBeUsed);
for (let testCase of testCases) {
  console.log("Input : ", testCase);
  console.log("Output : ", functionToBeUsed(testCase));
}
