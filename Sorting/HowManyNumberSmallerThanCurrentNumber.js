var smallerNumbersThanCurrent = function(nums) {
    let sortedValue = nums.slice('').sort((a,b)=>a-b);
    let finalOutput = [];
    for(let i=0;i<nums.length;i++) {
       for(let j=0;j<sortedValue.length;j++) {
        if(sortedValue[j] === nums[i]) {
            finalOutput.push(j);
            break;
        }
       }
    }
    return finalOutput;
};