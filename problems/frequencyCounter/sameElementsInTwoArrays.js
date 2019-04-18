// Time Complexity is O(n^2)
const isSameNaiveApproach = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) return false;

  for (let ele of arr1) {
    let foundIndex = arr2.indexOf(ele);
    if (foundIndex === -1) return false;
    arr2.splice(foundIndex, 1);
  }
  return true;
};

// Time Complexity is O(n)
const isSameRefactoredApproach = (arr1 = [], arr2 = []) => {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let ele of arr1) {
    obj1[ele] = obj1[ele] ? (obj1[ele] += 1) : 1;
  }
  for (let ele of arr2) {
    obj2[ele] = obj2[ele] ? (obj2[ele] += 1) : 1;
  }

  for (let key in obj1) {
    if (!(key in obj2)) return false;
    if (obj1[key] !== obj2[key]) return false;
  }
  return true;
};

const testCases = [
  [[1, 2, 3], []],
  [[1, 2, 3], [1, 2, 3]],
  [[1, 2, 3], [2, 1, 4]],
  [[1, 2, 3], [2, 1]],
  [[1, 2, 3], [3, 2, 1]],
  [[1, 2, 3], [2, 3, 1]],
  [[1, 2, 3], [4, 5, 6]]
];

// let functionToBeUsed = isSameNaiveApproach;
let functionToBeUsed = isSameRefactoredApproach;
console.log(functionToBeUsed);
for (let testCase of testCases) {
  [a, b] = testCase;
  console.log("Input : ", a, b);
  console.log("Output : ", functionToBeUsed(a, b));
}
