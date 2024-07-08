let num1=[2,3,4]
let num2=[6,7,8]

function mergeAr(num1,num2){
   let newArr=[];

   for(let i=0;i<num1.length;i++){
     newArr.push(num1[i]);
   }
   for(j=0;j<num2.length;j++){
    newArr.push(num2[j]);
   }
   return newArr;
}
console.log(mergeAr(num1,num2))