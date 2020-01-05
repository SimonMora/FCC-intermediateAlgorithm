function isPrime(num){
   
   if(num === 1) return true;
    
   for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}

function sumPrimes(num) {
    let sum = 0;
    for(let i = 0; i<=num;i++){
        if(isPrime(i)){
            sum += i;
        }
    }
    
    return sum;
}
  
   console.log(sumPrimes(977));
