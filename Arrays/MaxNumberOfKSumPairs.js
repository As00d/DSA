var maxOperations = function(nums, k) {
    const sortedArray = nums.sort((a,b)=>a-b);
    console.log(sortedArray)
    let i =0 , j= sortedArray.length-1, c=0;
    while(i<j) {
        if(nums[i] + nums[j] < k) {
            i++;
        } else if(nums[i] + nums[j] > k) {
            j--;
        } else {
            c++;
            i++;
            j--;
        }
    }
    return c;
};

maxOperations([3,1,3,4,3])




 /* this is one solution but not optimised 
    let c =0;
    for(let i=0;i<nums.length;i++) {
        for(let j=i+1;j<nums.length;j++) {
            if(nums[i] + nums[j] == k && nums[i]>0 && nums[j]>0) {
                c++;
                nums[i] = -nums[i];
                nums[j] = - nums[j];
            }
        }
    }
    return c;

*/