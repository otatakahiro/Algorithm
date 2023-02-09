var findMaxConsecutiveOnes = function(nums){
    var number = 0;
    var maximum = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1) number++;
        else number = 0;
        if(maximum < number) maximum = number;
    }   
    return(maximum);
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1,0,1,1,1,1,1,1]));