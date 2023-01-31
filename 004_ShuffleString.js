// const restoreString = function(s, indices) {
//     let string = new String(indices.length);
//     for(let i = 0; i < indices.length; i++){
//         string += s.substr(indices[i],1);
//     }
//     return string;
// };
// console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]));
// String.prototype.replaceAt=function(index, character) {
//     return this.substr(0, index) + character + this.substr(index+character.length); 
//   }
  
  var restoreString = function(s, indices) {
    let temp = s;
    for(let i in indices){
      temp = temp.substr(0, indices[i]) + s[i] + temp.substr(indices[i]+1, temp.length);
      console.log(s[i])
      console.log (temp.substr(0, indices[i]) + s[i] + temp.substr(indices[i]+1, temp.length));
    }
    return temp;
  };
  console.log(restoreString("codeleet", [4,5,6,7,0,2,1,3]))
  //code + c + eet
