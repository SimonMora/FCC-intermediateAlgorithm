function dropElements(arr, func) {
    // Drop them elements.
    return arr.filter((element,index)=> {
        if(index !== arr.indexOf(element)){
            console.log(element);
            return true; }
         return func(element);   
    });
  }

  console.log(dropElements([0, 1, 0, 1], function(n) {return n === 1;}));
  