// 1046. Last Stone Weight
var lastStoneWeight = function (stones) {
  while (stones.length != 1) {
    stones.sort((a, b) => a - b);
    let diff = stones[stones.length - 1] - stones[stones.length - 2];
    stones.pop();
    stones.pop();
    stones.push(diff);
    stones.sort((a, b) => a - b);
  }
  return stones[0];
};
console.log(lastStoneWeight([9, 4]));
