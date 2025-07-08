var canPlaceFlowers = function(flowerbed, n) {
    // A condition was missed in this case if there is only one element in array and that too equal to 1
    if (flowerbed.length == 1 && flowerbed[0] == 0) {
        return true;
    }
    let countOdd = 0, countEven = 0;
    for (let i = 0; i < flowerbed.length; i++) {
        if (i == 0) {
            if (flowerbed[i + 1] == 0 && flowerbed[i] == 0) {
                countEven++;
            }
            i++;
        } else if (i == flowerbed.length - 1) {
            if (flowerbed[i - 1] == 0 && flowerbed[i] == 0) {
                countEven++;
            }
        } else {
            if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
                countEven++;
            }
            i++;
        }

    }
    for (let i = 1; i < flowerbed.length; i++) {
        if (i == flowerbed.length - 1) {
            if (flowerbed[i - 1] == 0 && flowerbed[i] == 0) {
                countOdd++;
            }
        } else {
            if (flowerbed[i - 1] == 0 && flowerbed[i] == 0 && flowerbed[i + 1] == 0) {
                countOdd++;
            }
            i++;
        }

    }

    const maxValue = countOdd > countEven ? countOdd : countEven;
    return maxValue >= n ? true : false;
};


console.log(canPlaceFlowers([1,0,0,0,1], 1));




