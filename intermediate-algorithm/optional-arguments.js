function addTogether(...arg) {
    for(let num of arg){
        if(typeof num !== 'number') return undefined;
    }

    let newFunction = (num) =>{
        if(typeof num !== 'number') return undefined;
        return arg[0] + num;
    }
    if(arg.length === 1) return newFunction;


    return arg[0]+arg[1];
  }
  
  console.log(addTogether(2,3));

//   console.log(addTogether(2, "3"));