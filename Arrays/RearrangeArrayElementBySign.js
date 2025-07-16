var rearrangeArray = function(nums) {
    let positive=[], negative=[];
    let finalArray = [];
    for(let i=0;i<nums.length;i++) {
        if(nums[i]<0) {
            negative.push(nums[i]);
        } else {
            positive.push(nums[i]);
        }
    }

    for(let i=0;i<positive.length;i++) {
        finalArray.push(positive[i]);
        finalArray.push(negative[i]);
    }
    return finalArray;

};

rearrangeArray([3,1,-2,-5,2,-4])