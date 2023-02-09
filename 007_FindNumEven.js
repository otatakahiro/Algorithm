var findNumbers = function(nums) {
    var number;
    var answer = 0;
    for(let i = 0; i < nums.length; i++){
        number = String(nums[i]).length;
        if(number % 2 == 0) answer++;
    }
    return answer;
}
console.log(findNumbers([12,345,2,6,7896,52,888888]));