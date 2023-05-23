//Sorting - using JavaScript's inbuilt function

//How does the ".sort()" work?

// var stringArray = ["Apple", "Orange", "Bannana"]

// console.log(stringArray.sort())

// var array1 = [1, 30, 4, 21, 100000];

// console.log(array1.sort())




//Arrow Function


// An arrow function is a concise way to write a function in 
// JavaScript that was introduced in ES6. It is a compact alternative to 
// a traditional function expression, with some semantic differences and deliberate 
// limitations in usage . Here's a brief summary of how an arrow function is different 
// than a normal function:

// Arrow functions are always unnamed, but can be assigned to a variable so it has a name .
// Arrow functions cannot be used as constructors and should not be used as methods as they 
// don't have their own bindings to this, arguments, or super.
// The this keyword behaves differently in arrow functions compared to regular functions. 
// In arrow functions, this always represents the object that defined the arrow function, 
// while in regular functions, this represents the object that called the function .







//What is the difference between using "array.sort()" and array.sort((a,b) => a - b)?

//Do some research on this and t-diagram to explain how it works.


// var array2 = [1, 30, 4, 21, 100000, -5];

// console.log(array2.sort())





// var array3 = [1, 30, 4, 21, 100000, -5];

// console.log(array3.sort((a,b) => a - b))

// Three Number Sum


// Write a function that takes in a non-empty array of distinct integers 
// and an integer representing a target sum. 
// The function should find all triplets in the array that sum up to the target sum 
// and return a two-dimensional array of all these triplets. 
// The numbers in each triplet should be ordered in ascending order, and the triplets themselves 
// should be ordered in ascending order with respect to the numbers 
// they hold. If no three numbers sum up to the target sum, 
// the function should return "No three numbers sum up to the target sum".

// sample Input 
// array= [12,3,1,2,-6,5,-8,6]
// targetSum = 0;

// Sample Output
// [[-8,2,6],[-8,3,5],[-6,1,5]]

function threeNumSum (array, target){
    // empty array to push results into
    var result = [];
    // boolean check for no result
    var resultCheck = false;
    // sort numbers
    array.sort((a,b) => a-b);
    // first number loop
    for (var x = 0; x < array.length-2; x++){
        // second number loop
        for (var y = x+1; y < array.length-1; y++){
            // third number loop
            for (var z = y+1; z < array.length; z++){
                // check if values add up to target
                if (array[x]+array[y]+array[z] == target){
                    // push values into result array, set resultCheck to true
                    result.push([array[x], array[y], array[z]]);
                    resultCheck = true;
                }
            }
        }
    }

    if (resultCheck == false){
        return "No three numbers sum up to the target sum";
    } else {
        return result;
    }
}

function whileThreeNum (array, target){
    var result = [];
    var resultCheck = false;
    array.sort((a,b)=>a-b);
    // iterate through array
    for (var x = 0; x < array.length-2; x++){
        var y = x+1;
        var z = y+1;
        // while 2nd/3rd variable are not at endpoints
        while (y < array.length-1){
            // if 3rd index is at length, increment 2nd index and reset 3rd index
            if (z >= array.length){
                y++;
                z=y+1;
            }

            if (array[x]+array[y]+array[z] == target){
                result.push([array[x], array[y], array[z]]);
                resultCheck = true;
            }
            z++;
        }
    }

    if (resultCheck == false){
        return "No three numbers sum up to the target sum";
    } else {
        return result;
    }
}

function joshThreeNumSum(array, targetSum){
    array.sort((a,b) => a-b);
    const triplets = [];
    for (let i = 0; i < array.length-2; i++){
        let left = i+1;
        let right = array.length-1;
        while (left < right){
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum){
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            }
            else if (currentSum < targetSum){
                left++;
            }
            else if (currentSum > targetSum){
                right--;
            }
        }
    }
    return triplets;
}

// sample Input 
// array= [12,3,1,2,-6,5,-8,6]
//                [ 0   1  2  3  4  5  6  7]  
// array.sorted = [-8, -6, 1, 2, 3, 5, 6, 12]
// targetSum = 0;

// Sample Output
// [[-8,2,6],[-8,3,5],[-6,1,5]]
console.log("Three for loops result:")
console.log(threeNumSum([12,3,1,2,-6,5,-8,6], 0));
console.log("Solved with While loop:")
console.log(whileThreeNum([12,3,1,2,-6,5,-8,6], 0))
console.log("Josh's solution:");
console.log(joshThreeNumSum([12,3,1,2,-6,5,-8,6], 0))