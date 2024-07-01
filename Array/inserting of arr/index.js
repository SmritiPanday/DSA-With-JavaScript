let arr= [1,2,3,4,5]

function insertElement(arr,index,element){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        if(i===index){
            newArr.push(element)
        }
        newArr.push(arr[i])
    }
    return newArr
}
 console.log(insertElement(arr,3,200))