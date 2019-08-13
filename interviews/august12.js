//method takes in a number
//returns a factorial of the number

//if 3, factorial 1*2*3

//takes in number
//while number is greater than zero
//number -1 * function again

//for loop
//counters

const factorial = (num) =>{
    let result = 1
    let fact = num
    for (let i = 0; i<num; i++){
      result = fact*result
      fact--
    }
    return result
  }
  
  console.log(factorial(5))
  
  // const factorial = (num) =>{
  //   let next = num-1
  //   while (next > 0){
  //     num * factorial(next)
  //   }
  //   return num
  // }
  
  // factorial(3)