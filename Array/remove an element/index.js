let arr=[4,5,1,3,1,4]
 let val=1;
 let newLength = removeElem(arr, val);
function removeElem(arr,val){
let i=0;

for(let j=0;j<arr.length;j++){
   if(arr[j]!=val){
   arr[i]=arr[j];
   i++
   }
}
return i;
}
console.log(arr.slice(0,newLength))