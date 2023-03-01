var sortedSquares = function(nums) {
    let squaring = [];
    let sort;
    for(let i = 0; i < nums.length; i++){
        squaring[i] = nums[i] * nums[i];
    }
    sort = squaring.sort(function(a,b){
        return (a < b) ? -1 : 1;
    }) ;
    return sort
};
console.log(sortedSquares([-7,-3,2,3,11]));