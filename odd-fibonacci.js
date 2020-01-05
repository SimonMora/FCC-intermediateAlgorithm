function fibonacci(num){
    
    let arr = [0,1];
    var i = 2;
    
    do{
        arr.push( arr[i-2]+arr[i-1]);
        i++;

    }while(arr[i-1] < num);
    
    if(arr[arr.length-1]>num) arr.pop();
    
    arr.shift();

    return arr;
}

function sumFibs(num) {
    
    let arr = fibonacci(num);
    let count = 0;

    arr.map(element=>{
        if(element % 2 !== 0){
            count += element;
        }      
    });
    
    return count;
}

console.log(sumFibs(90));
console.log(sumFibs(4000));