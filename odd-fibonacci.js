function fibonacci(num){
    let arr = [0,1];
    arr.reduce((acc,actual,index)=>{
        let i = 0;
                while(i<num){
            console.log(acc);
            arr.unshift(actual + arr[i-1])
        }
    })
}