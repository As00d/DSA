var maxArea = function(height) {
    let i =0, j= height.length-1;
    let max =0;
    while(i<j) {
        if(height[i]<height[j]) {
            if(height[i] * (j-i) > max) {
                max = height[i] * (j-i);
            }
            i++;
        } else {
            if(height[j] * (j-i) > max) {
                max = height[j] * (j-i);
            }   
            j--;
        }
    }
    return max;
};

maxArea([1,8,6,2,5,234,3,43,232,32,334,8,3,7]);