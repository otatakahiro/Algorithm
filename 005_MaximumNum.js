var mostWordsFound = function(sentences) {
  let maxnums = 0;
  for(let i = 0; i < sentences.length; i++){
    const words = sentences[i].split(' ').length;
    if(words > maxnums){
      maxnums = words;
    }  
  }
  return maxnums;
  
};
console.log(mostWordsFound(["alice and bob love leetcode","i think so too","this is great thanks very much"]));