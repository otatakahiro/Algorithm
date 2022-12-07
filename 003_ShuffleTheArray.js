let nums = [2,5,1,3,4,7];
let n = 3; 
const shuffle = function(nums, n){
    let array = [];
    for(let i = 0; i < n; i++){
        array.push(nums[i]);
        array.push(nums[i + n]);
    }  
    return array;
};
console.log(shuffle(nums,n));