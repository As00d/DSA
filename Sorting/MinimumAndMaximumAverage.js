var minimumAverage = function(nums) {
   nums = nums.sort((a, b) => a - b);
   let i =0, j= nums.length -1, min = Number.MAX_SAFE_INTEGER;
   let arr=[];
   while(i<j){
    arr.push((nums[i] + nums[j]) /2);
    i++;j--;
   }
   for(let i=0;i<arr.length;i++) {
    if(arr[i]<min) {
        min = arr[i];
    }
   }

return min;
};

minimumAverage([7,8,3,4,15,13,4,1])