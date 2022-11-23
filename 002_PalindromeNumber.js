let x = "kdkkjdkffkdjkkdk";
//
var isPalindrome = function(x) {
  x = String(x);
  if(x < 0){
    return false;
  }else{
    for(let i = 0; i < x.length; i++){
      if(x[i] != x[x.length - i - 1]){
        return false;
      }
      if(i == Math.floor(x.length / 2)){
        return true;
      }
    }
  }
};
console.log(isPalindrome(x));


