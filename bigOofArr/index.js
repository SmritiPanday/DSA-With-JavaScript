function myArrays(arr){
  for(let i =0;i<arr.length;i++){
    for(j=0;j<arr.length;j++){
        console.log(arr[i],arr[j]);
    }
  }
}
myArrays([1,2,3,4])

// o(n*n)
