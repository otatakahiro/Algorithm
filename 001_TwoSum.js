let nums = [5,8,7,2];
let target = 9;
var twoSum = function(nums, target) {
  for(let i = 0; i < nums.length; i++){
    for(let j = i+1; j < nums.length; j++){
      if(target == nums[i] + nums[j]){
        return [i, j];
      }
    }
  }
};
console.log(twoSum(nums,target))