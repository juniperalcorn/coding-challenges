test = [7, 12, 1, 4, 9, 2, 0]

function bubbleSort(arr){
    let noSwaps
    for (let i = arr.length; i>0; i--){
        noSwaps = true
        for (let j = 0; j<i-1; j++){
            if (arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
                noSwaps = false
            }
        }
        if (noSwaps) break
        console.log(arr)
    }
    return arr
}

//swap functions
function swap(arr, idx1, idx2){
    var temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}

const swapsies = (arr, idx1, idx2) =>{
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

bubbleSort(test)