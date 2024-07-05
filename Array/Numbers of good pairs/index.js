let arr=[1,2,3,1,3,2]

function nmuberPair(arr){
    let count=0;
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j]){
                count++;
            }
        }
    }
    return count;
}
console.log(nmuberPair(arr))