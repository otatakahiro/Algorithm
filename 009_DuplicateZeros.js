var duplicateZeros = function(arr) {
    let original = arr.length;
    for(let i = 0; i < arr.length; i++){ 
        if(arr[i] == 0){
          for(let j = arr.length - 1; j >= i ; j--){
              arr[j + 1] = arr[j];
              if(i == j){
                  arr[i + 1] = 0;
                  break;
              }
            }
            // arr.splice(i,0,0);
            i++;
        }
        arr.length = original;
    }
    return arr;
};

console.log(duplicateZeros([1,0,5,0,0,9,8,0]));
console.log(duplicateZeros([1,2,3,4,5,6,7,8,9]));