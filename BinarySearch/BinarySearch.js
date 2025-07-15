var search = function(nums, target) {
    let left =0, right = nums.length -1 , mid = Math.floor((left + right)/2);
    while(left<=right) {
        if(target == nums[mid]) {
            return mid;
        } else if(target > nums[mid]) {
            left = mid +1;
            mid =  Math.floor((left + right)/2);
        } else {
            right = mid -1;
             mid =  Math.floor((left + right)/2);
        }
    }
    return -1;
};