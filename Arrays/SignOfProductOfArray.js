var arraySign = function(nums) {
    let c = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            c++;
        }

        if (nums[i] == 0) {
            return 0;
        }
    }

    if (c % 2 == 0) {
        return 1;
    } else {
        return -1;
    }
};

