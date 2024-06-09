// A function to chech if there is a contigeous subarray that sums up to the target within the array.
function FindSubarrySum(array, target){
    // find the subarray
    let trackerSum = 0 
    for (let i = 0; i < array.length; i++){
        trackerSum += i;
        if(trackerSum === target){
            return true
        }else if(trackerSum != target){
            return false
        }

    }

    }
 //test example :
 // A giving array of integers
const array =[8,4,12,1,3,,4,5]
// The target 
const target = 12
console.log(FindSubarrySum(array, target))

