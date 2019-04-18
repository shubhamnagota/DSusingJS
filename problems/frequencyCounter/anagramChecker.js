// Time Complexity is O(n)
const isAnagram = (string1 = "", string2 = "") => {
  if (string1.length !== string2.length) return false;

  let lookup = {};

  for (let ele of string1) {
    lookup[ele] = lookup[ele] ? (lookup[ele] += 1) : 1;
  }
  for (let ele of string2) {
    if (!lookup[ele]) return false;
    lookup[ele] -= 1;
  }

  return true;
};

const testCases = [
  ["aaa", "aa"],
  ["aza", "aaa"],
  ["zza", "aza"],
  ["cat", "cat"],
  ["tac", "cat"]
];

let functionToBeUsed = isAnagram;
console.log(functionToBeUsed);
for (let testCase of testCases) {
  [a, b] = testCase;
  console.log("Input : ", a, b);
  console.log("Output : ", functionToBeUsed(a, b));
}
