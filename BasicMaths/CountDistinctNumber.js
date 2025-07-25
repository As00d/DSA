var countDistinctIntegers = function (nums) {
  let output = [...nums];
  for (let i = 0; i < nums.length; i++) {
    let reverseNumber = Number(String(nums[i]).split("").reverse().join(""));
    output.push(reverseNumber);
  }
  let mySet = new Set([...output]);
  return mySet.size;
};

countDistinctIntegers([1, 13, 10, 12, 31]);
