var findLonely = function(nums) {
    const newMap = new Map();
    for(let i=0;i<nums.length;i++) {
        if(newMap.get(nums[i])) {
            newMap.set(nums[i], newMap.get(nums[i]) +1)
        } else {
            newMap.set(nums[i], 1);
        }
    }
    let output =[];
    for(let i=0;i<nums.length;i++) {
        if(newMap.get(nums[i]) ===1 && !newMap.has(nums[i] - 1 ) && !newMap.has(nums[i] + 1)) 
        {
            output.push(nums[i]);
        }
    }
    return output;
};

findLonely([10,6,5,8]);
