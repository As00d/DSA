var pivotIndex = function(nums) {
    let leftArray=[], rightArray=[], sumL = 0, sumR = 0;
    for(let i=0;i<nums.length;i++) {
        sumL +=nums[i];
        leftArray.push(sumL);
    }
    for(let i=nums.length-1; i>=0;i--) {
        sumR +=nums[i];
        rightArray.unshift(sumR);
    }

    for(let i=0;i<leftArray.length;i++) {
        if(leftArray[i] === rightArray[i]) {
            return i;
        }
    }
    return -1;
};

pivotIndex([1,7,3,6,5,6])