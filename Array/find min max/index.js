let myArray = [1,2,3,4]

function minMax(myArray){

    let max= myArray[0];
    let min =myArray[0];

    for(let i =0;i<myArray.length;i++){

        if(myArray[i]>max){
            max=myArray[i]
        }
        else if (myArray[i]<min){
            min=myArray[i]
        }
    }
    return [min,max]
}
console.log(minMax(myArray))