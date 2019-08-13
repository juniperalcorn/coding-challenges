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
  
//   console.log(factorial(5))
  
//

const factorialRec = (num) =>{
    
    let result = 1
    const recursive = (num) =>{
        if (num === 0) return 1
        return num * recursive(num-1)
    }
    return result * recursive(num)
}
  console.log(factorialRec(5))