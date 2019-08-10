test = [7, 12, 1, 4, 9, 2, 0]

const selectionSort = (arr) =>{
    for (let i = 0; i<arr.length; i++){
        let smallest = i;
        for (let j = i+1; j<arr.length; j++){
            if (arr[j] < arr[smallest]){
                smallest = j
            } 
        }
        if (i!== smallest){
            let temp = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = temp
        }
    }
    console.log(arr)
}

selectionSort(test)