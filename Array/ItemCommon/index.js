let arr1=[2,3,6]
let arr2=[5,9,8]

function itemCommon(arr1,arr2){
let obje={};
for(let i=0;i<arr1.length;i++){
  obje[arr1[i]]=true
}
for(let j=0;j<arr2.length;j++){
  if(obje[arr2[j]])
  return true;
}
return false;

}
console.log(itemCommon(arr1,arr2))