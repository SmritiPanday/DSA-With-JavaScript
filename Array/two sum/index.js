let num=[2,3,4,5];
let target=9;

function twoSum(num){
    for(let i=0;i<num.length;i++){
        for(j=i+1;j<num.length;j++){
            if(num[i]+num[j]===target){
                return [i,j];
            }
        }
    }
}
console.log(twoSum(num))
