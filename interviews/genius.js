let original = ["world", "hello"]
let string = "world,hello"
let actual = 'rldhello wo'
let splits = 1

//understand the problem
//is the unscrambled input a string or an array?
//i decided to use it as a string
//the comma is replaced with a space
//there is one split, with the last three characters
//and the split section is placed at the beginning

//approach
//with one example, there is no apparent pattern to where or how the split is made
//rather, i just have to put the scrambled input back in order
//first, arrange the dictionary alphabetically
//make unscrambled and scrambled into arrays that can be compared by splitting them
//cycle through scrambled word and match letters up to unscrambled inputs
//if it matches the unscrambled letter, remove it from scrambled word and push to empty array
//break inner loop to prevent extra letters getting pushed to array

//at the end of the loop, join answer array at every character and return

//pros to solution: given no apparent pattern to the split, this would work in any case
//cons: big O of n^2 (quadratic time) means that this could take a long time with longer inputs.

const stitch = (arr, str1, str2) =>{
    // let spaced = str1.replace(',', ' ').split('')
    let dictionary = []
    let spaced = []
    let alphabet = arr.sort()
    for (let i = 0; i <alphabet.length; i++){
        let word = alphabet[i].split('')
        dictionary.push(word)
        for (let i = 0; i<word.length; i++){
            spaced.push(word[i])
        }
        spaced.push(' ')
    }

    let problem = str2.split('')

    let answer = []

    for (let i = 0; i<spaced.length; i++){
        for (let j = 0; j<problem.length; j++){
            if(spaced[i]===problem[j]){
                let letter = problem[j]
                answer.push(problem[j])
                problem.slice(j, j+1)
                break
            }
        }
    }

    let final = answer.join('')

    // let final = answerJoin.splice(dictionary[0].length, ' ')
    console.log(final)
    return final
}

stitch(original, string, actual)

//SECOND ATTEMPT: OPTIMIZE
//it appears that the given word was sliced once, removing the last three characters
//so take the first three characters of the scrambled string and move them around
//this assumes that in all instances it's a question of being scrambled the same way
//it solves this problem, but doesn't solve other wacky edge cases
//big o of 1.

const stitchBetter = (str2) =>{
    //removing the offending characters
    let temp = str2.slice(0,3)
    //saving the remaining characters
    let answer = str2.slice(3)
    //move to correct position
    let final = answer.concat(temp)

    return final
}

// stitchBetter(actual)

//THIRD ATTEMPT: OPTIMIZED ALGORITHMICALLY

const stichBest = (str1, str2, num) =>{

}

// stitchBest(string, actual, splits)