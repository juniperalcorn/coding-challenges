//fizzbuzz
//takes a list of positive integers
//integers can repeat
//go through the list
//if number %3 output fizz
//if num % 5 output buzz
//if num % 3 and % 5 output fizzbuzz
//if num % 7 output bazz
//if num % 7 and % 5 output
//if num doesn't meet those requirements, save the value
//output on a single line per number

//write a function that takes an array of numbers
//initiate an empty array words
//loop through the array
////if statements
////check which condition is satisfied
////push string or num into array
////

//loop through the words array
//console.log each element

arr = [1,2,3,4,5,6,7,8,9,10,15,21,35]
const fizzbuzz = function(){
    for (let i =0; i<arr.length; i++){
      let str = ''
      if ((arr[i] % 3 === 0) && (arr[i] % 5 === 0)) console.log(str.concat('fizzbuzz'))
      if ((arr[i]%3 === 0) && (arr[i]%7===0))console.log(str.concat('fizzbazz'))
      if ((arr[i] % 5 === 0) &&(arr[i] % 7 === 0)) console.log(str.concat('buzzbazz'))
      if (arr[i] % 7 === 0) console.log(str.concat('bazz'))
      if (arr[i]%3 === 0)console.log(str.concat('fizz'))
      if (arr[i] % 5 === 0) console.log(str.concat('buzz'))
      console.log(str.concat(arr[i]))
    }
  }
  fizzbuzz(arr)
  
  //function
  //receives a list of numbers, and a target number: array of integers
  //list numbers can be negative or positive
  //target number can only be positive
  //find if any two integers in the list add up to the target
  // return true if yes
  //return false if no
  
  //write function
  //for loop to grab the first int in the list
  //nested loop to test adding the int to later integers in the list
  //within the loops, adding the two indices and testing if the value equals the target
  //return true (break the loop)
  //return false
  
  //set an empty hash table
  //loop through once
  //target - arr[i]
  //store that result in the hash table
  
  //[5, 12, 7, 5]
  arr = [5, -2, 3, 5, 7, 12]
  target = 1
  
  const addition = function(arr, target){
    let hash = {}
    for (let i = 0; i<arr.length; i++){
      let key = (target - arr[i])
      if (!hash[arr[i]]){
        //store compliment at this positions
      }
      //else if we've seen it there was another value in the past
      
      console.log(hash)
    }
    return false
  }
  
  console.log(addition(arr, target))