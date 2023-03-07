// Exercise: Practicing with functions

// Task 1: ===============================================================================================================
// Write a function named letterFinder that accepts two parameters: word and match.

// function letterFinder(word, match){

// }

// Task 2:===============================================================================================================
// Code a 'for' loop inside the function's body. The for loop's counter should start at zero, 
// increment by 1 on each iteration and exit when the counter variable's value is equal to the length of the word parameter.

// function letterFinder(word, match){
//     for(var i = 0; i < word.length; i++){

//     }
// }

// Task 3:===============================================================================================================
// Add an if statement inside the for loop whose condition works as follows:
//  Access each of the letters inside the passed in word using the counter variable, with word[i]. 
// Check if the current word[i] is equal to the value of match.

// function letterFinder(word, match){
//     for(var i = 0; i < word.length; i++){
//         if(word[i] == match){

//         }
//     }
// }

// Task 4:===============================================================================================================
// console.log the following inside the body of the if statement: console.log('Found the', match, 'at', i).

// function letterFinder(word, match){
//     for(var i = 0; i < word.length; i++){
//         if(word[i] == match){
//             console.log("Found the %s at %s", match, i)
//         }
//     }
// }

// Task 5:===============================================================================================================
// Write the else condition. Here you'll just console log the following: console.log('---No match found at', i).

function letterFinder(word, match){
    for(var i = 0; i < word.length; i++){
        if(word[i] == match){
            console.log("Found the %s at %s", match, i)
        }else{
            console.log("---No match found at %s", i)
        }
    }
}

// Task 6: ===============================================================================================================
// Call the letterFinder and pass it as its first argument as the string "test" and as its second argument, the string "t".
// Your output should be the following:
// Found the t at 0
// ---No match found at 1
// ---No match found at 2
// Found the t at 3

letterFinder("test", "t")