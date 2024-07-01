let arr = [1, 2, 3, 4, 5];

function deletElement(arr, index) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i !== index) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(deletElement(arr, 4)); 
