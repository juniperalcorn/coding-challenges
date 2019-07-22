//https://www.codewars.com/kata/anagram-detection/train/javascript

// write the function isAnagram
var isAnagram = function(test, original) {
    let frequencyCounter1={}
    let frequencyCounter2={}
    if (test.length !== original.length){
      return false
    }
      
    for(let el of test.toLowerCase()){
      frequencyCounter1[el] = (frequencyCounter1[el] || 0) + 1
    }
    console.log(frequencyCounter1)
    for(let el of original.toLowerCase()){
      frequencyCounter2[el] = (frequencyCounter2[el] || 0) + 1
    }
      console.log(frequencyCounter2)
      
    for (let key in frequencyCounter1){
      if (!(key in frequencyCounter2)){
        return false
      } else if (frequencyCounter1[key] !== frequencyCounter2[key]){
        return false
      }
    }
    return true
  };
  