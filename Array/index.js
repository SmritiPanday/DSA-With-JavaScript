//travering
//1,2,3,4,5
// 

//this is traversing of whole elements in an arrays 

//this traverisng for a particular number in an array 
let arra=[1,2,3,4,5]

function myArry(arra){
    let targetNumber= 3;
    let found = false;
    for (let i = 0;i<arra.length;i++){
        if(arra[i]===targetNumber){
            found= true;
            console.log("Target Number are found at index:",i);
            break;
        }
    }
}
myArry(arra)

    //let arr=[1,2,3,4,5]
// function myArray(arr){
//     for(let i=0;i<arr.length;i++){
//       console.log(arr[i])
//     }
// }