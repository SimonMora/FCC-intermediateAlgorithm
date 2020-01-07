function arrGenerator(arr){
    let newArr = [];
    if(arr[0] < arr[1]){
        for(let i = arr[0]; i<=arr[1] ; i++){
            newArr.push(i);
        }
    } else{
        for(let i = arr[1]; i<=arr[0] ; i++){
            newArr.push(i);
        }   
    }
    return newArr;
}


function smallestCommons(arr) {
    
    let newArr = arrGenerator(arr);
    let number;
    let aux = [];
    let i = newArr[newArr.length-1];

    while(number === undefined){ 
        
        for(let num of newArr){
            if(i % num === 0){ 
            aux.push(num);
            }
        }

        if(aux.length === newArr.length){
            number = i;
        }else {
            aux = [];
        }
        
        i++;
    }

    return number;
}
 
  

  console.log(smallestCommons([1,5]));