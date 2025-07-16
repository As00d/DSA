var getFinalState = function(nums, k, multiplier) {
     while(k>0) {
        let min = nums[0], index=0;
        for(let i=0;i<nums.length;i++) {
            if(nums[i] < min) {
                min = nums[i];
                index = i;
            }
        }
        nums[index] *=  multiplier;
        k--;
    }
    return nums;
};