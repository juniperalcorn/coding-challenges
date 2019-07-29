//https://app.codesignal.com/interview-practice/task/pMvymcahZ8dY4g75q
function firstDuplicate(a) {
    let hash = []
    for (let i = 0; i<a.length; i++){
        for (let j = i+1; j<a.length; j++){
            if (a[i] === a[j]){
                hash.push(j)
            }
        }
    }
    if (hash.length === 0) {
        return -1
    } else if (hash.length === 1) {
        let index = hash[0]
        return a[index]
    } else {
        let count = a.length
        for (let i = 0; i<hash.length; i++){
            if (hash[i]<count){
                count = hash[i]
            }
        }
        return a[count]
    }
}

//notes: O(2n)
//needs refactoring