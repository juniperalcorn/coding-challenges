//udemy examples

test = [27, 43, 9, 0, 31, 99]

const insertionsort = (arr) =>{
    for (let i = 1; i<arr.length; i++){
        let currentVal = arr[i]
        for (let j = i-1; j>=0 && arr[j] > currentVal; j--){
            arr[j+1] = arr[j]
        }
        /////what is this line about
        arr[j+1] = currentVal
    }
    console.log(arr)
    return arr
}

insertionsort(test)