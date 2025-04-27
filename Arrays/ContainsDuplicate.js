var containsDuplicate = function (nums) {
  const mySet = new Set([...nums]);
  if (mySet.size === nums.length) {
    return false;
  } else {
    return true;
  }
};

containsDuplicate([1, 2, 3, 1]);
