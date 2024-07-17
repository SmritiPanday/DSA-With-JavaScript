let nums=[1,2,3,4]

let operation = 0;
    function divisibleArr(nums){
    for (let i = 0; i < nums.length; i++) {
        let remainder = nums[i] % 3; 
        if (remainder === 1 || remainder === 2) {
            operation++;
        }
    }

    return operation;
};
console.log(divisibleArr(nums))