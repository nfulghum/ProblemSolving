// add whatever parameters you deem necessary
// O(n) / O(n)
function countPairs(arr, num) {
    // create a Set for the arr
    let s = new Set(arr);

    // Track pairs
    let count = 0;

    // loop over arr and check for pairs that = num
    for (let val of arr) {
        s.delete(val);
        if (s.has(num - val)) {
            count++;
        }
    }
    return count;
}

// O(n log n) / O(1)

// function countPairs(arr, num) {
//     arr.sort((a, b) => a - b);
//     let count = 0;
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//         let sum = arr[left] + arr[right];
//         if (sum === num) {
//             count++;
//             left++;
//             right--;
//         } else if (sum < num) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return count;
// }
