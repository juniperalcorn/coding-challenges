test = [8, 3, 5, 4, 7, 6, 1, 2]

frstArr = [1, 10, 50]
sndArr= [2, 14, 99, 100]

const merge = (arr1, arr2) =>{
    let empty = []
    let i = 0
    let j = 0
    while (i<arr1.length && j<arr2.length){
        if (arr1[i]<arr2[j]){
            empty.push(arr1[i])
            i++
        } else {
            empty.push(arr2[j])
            j++
        }
    }

    while (i<arr1.length){
        empty.push(arr1[i])
        i++
    }
    while (j<arr2.length){
        empty.push(arr2[j])
        j++
    }
    console.log(empty)
    return empty
}

// merge(frstArr, sndArr)

const mergeSort = (arr) =>{
    if (arr.length <= 1) return arr
    let half = Math.floor(arr.length/2)
    let left = mergeSort(arr.slice(0, half))
    let right = mergeSort(arr.slice(half))
    return merge(left, right)
}

console.log(mergeSort(test))

//big o of O(n log n)
//this is the best you can do for a sorting algorithm!