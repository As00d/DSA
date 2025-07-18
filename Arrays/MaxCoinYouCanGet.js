var maxCoins = function(piles) {
     piles.sort((a,b)=>a-b);
    let i = piles.length -1 , j = piles.length-2 , k =0;
    let ans = 0;
    while(j>k) {
        ans+=piles[j];
        k = k+1;
        i=i-2;
        j= j-2
    }
    return ans;
};

maxCoins([2,4,1,2,7,8]);