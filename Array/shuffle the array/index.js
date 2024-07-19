let nums=[2,5,7,3,6,8]
let n=3;
 function shuffleArr(nums, n) {
    let result= new Array(nums.length);
    
    for(let i=0;i<n;i++){
        result[2*i]=nums[i]
        result[2*i+1]=nums[i+n]

    }
    return result 
}
console.log(shuffleArr(nums, n))