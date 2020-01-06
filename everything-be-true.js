function truthCheck(collection, pre) {
    // Is everyone being true?
    let newCollection = [];
    collection.map(element =>{
        if(Boolean(element[pre])) newCollection.push(element); 
    })
    console.log(collection.length === newCollection.length);
    return collection.length === newCollection.length;
  }
  
//   truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");

  truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")