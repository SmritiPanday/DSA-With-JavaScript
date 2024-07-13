let num1=[2,3,4,5,5]
let num2=[3,5,5,7,6,8]


function findCommon(num1,num2){
let ans1=0;
let ans2=0;

for(let i=0;i<num1.length;i++){
for(let j=0;j<num2.length;j++){
if(num1[i]===num2[j]){
  ans1++;
  break;
  
}
 
}
} 
for(let i=0;i<num1.length;i++){
for(let j=0;j<num2.length;j++){
if(num2[j]===num1[i]){
 ans2++;
 break;
}
}
}
return [ans1,ans2]
}
console.log( findCommon(num1,num2))