
let arr = ["apple", "banana", "pear"];

function longestString(arr) {
    let longestString = "";

    for (let i = 0; i < arr.length; i++) {
        let currentString = arr[i];
        if (currentString.length > longestString.length) {
            longestString = currentString;
        }
    }

    return longestString;
}

console.log(longestString(arr)); 
//output "banana"
