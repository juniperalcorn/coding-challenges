//https://www.codewars.com/kata/unique-in-order/train/javascript

var uniqueInOrder=function(iterable){
    let point1 = 0
    let point2 = 1
    let answer = []
    
    while (point2<=iterable.length){
      if (iterable[point1] === iterable[point2]){
        point2 += 1
      } else{
        answer.push(iterable[point1])
        point1 = point2
        point2 +=1
      }
    }
}