test = [8, 3, 5, 4, 7, 6, 1, 2]

const pivot = (arr, startIdx = 0, endIdx = arr.length -1) =>{
    
    //needed swapping function, was maybe not getting it right on my own
    const swap = (arr, idx1, idx2) =>{
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    
    
    let pivot = arr[startIdx]
    let pivotIdx = startIdx

    for (let i = startIdx+1 ; i<=endIdx; i++){
        if (pivot > arr[i]){
            pivotIdx ++
            swap(arr, pivotIdx, i)
        }
    }
    swap(arr, startIdx, pivotIdx)
    
    // console.log(arr)
    return pivotIdx
}

const quicksort = (arr, left = 0, right = arr.length-1) =>{
    if (left < right){
        let pivotIdx = pivot(arr, left, right)
        quicksort(arr, left, pivotIdx-1)
        quicksort(arr, pivotIdx+1, right)
    }
    console.log(arr)
    return arr
}
quicksort(test)