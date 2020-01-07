


function steamrollArray(arr) {
    // I'm a steamroller, baby
    let newArr = [];    
    
    arr.map(element => { 
        
        if(typeof element === 'object'){
            console.log(typeof element +" cuyo valor es: " + element );
           try {
            for(let num of element){
                
                if(typeof num === 'object'){
                    let iterator = steamrollArray(num).values();
                    for(let some of iterator){
                        newArr.push(some);
                    }
                }else{
                newArr.push(num);
                }
            }  
           } catch (error) {
             console.log(error+ " " + arr.indexOf(element)+ " " + typeof element);  
             newArr.push(element);
           } 
        }else{
            newArr.push(element);
        }        
    });

    return newArr;

   }
  
//   console.log(steamrollArray([1, [2], [3, [[4]]]]));
  console.log(steamrollArray([1, {}, [3, [[4]]]]));