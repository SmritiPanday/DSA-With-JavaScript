let nums=[1,-1,3,2,4]

function countSum(nums){
let target=3;
let count=0;
for(let i=0;i<nums.length;i++){
for(let j=i+1;j<nums.length;j++){
if(nums[i]+nums[j]<target){
 count++;
}
}
}
  return count;
}
console.log(countSum(nums))