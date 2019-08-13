test = [8, 3, 5, 4, 7, 6, 1, 2]

const pivot = (arr, startIdx = 0, endIdx = arr.length -1) =>{
    let pivot = arr[startIdx]
    let pivotIdx = startIdx

    for (let i = startIdx ; i<arr.length; i++){
        if (pivot > arr[i]){
            pivotIdx ++
            let temp = arr[pivotIdx]
            arr[i] = temp
            temp = arr[i] 
        }
    }
    pivot = arr[pivotIdx]
    arr[pivotIdx] = pivot
    
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