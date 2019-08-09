string = 'X X\n OO\nXOO'

const tictactoe = (str) =>{
    let a = str.split('\n').join('').split('') //columns
    let b = str.split('\n') //rows
    if (!a) return undefined

    let wins = [0,0] //x, o

    //check rows
    for (let i = 0; i<b.length; i++){
        let countX = 0
        let countO = 0
        let space = 0
        for (let j = 0; j<b[i].length; j++){
            if (b[i][j] === 'X') countX ++
            if (b[i][j]===' ') space ++
            if (b[i][j] === 'O') countO ++

            if(countX === 2 && space === 1) wins[0] ++
            if(countO === 2 && space === 1) wins[1] ++
        }
    }

    let countX = 0
    let countO = 0
    let space = 0
    const recursive = (arr, index)=>{
        if (index > arr.length){
            if (countX === 2 && space === 0){
                return wins[0] ++
            } else if (countO === 2 && space === 0){
                return wins[1] ++
            } else {return console.log('done')}
        } 
        if (arr[index] === 'X') countX ++
        if (arr[index] === 'O') countO ++
        if (arr[index] === ' ') space ++

        recursive(arr, index+3)
    }

    recursive(a, 0)
    countX= 0, countO = 0, space = 0
    recursive(a, 1)
    countX, countO, space = 0
    recursive(a, 2)
    countX, countO, space = 0


    
    //check columns
    // for (let i = a.length-1; i>a.length-4; i--){
    //     let countX = 0
    //     let countO = 0
    //     let space = 0
    //     for (let j = a.length-1; j>0; j-3){
    //         if(a[j] === 'X') countX ++
    //         if(a[j] === ' ') space ++
    //         if(a[j] === 'O') countO ++

    //         if(countX === 2 && space === 1) wins[0] ++
    //         if(countO === 2 && space === 1) wins[1] ++
    //     }
    // }
    //TAKING TOO LONG


    console.log(wins)
    return wins
}

tictactoe(string)