let num=[2,3,4,2,5,3];


function findDupli(num){
let numCount={};
let duplicates=[];
for(let nums of num){
  numCount[nums]=(numCount[nums] || 0) +1;
  }
  
  for (let key in numCount) {
    if (numCount[key] > 1) {
      duplicates.push(Number(key));
    }
  }
 return duplicates;
 
}
console.log(findDupli(num))