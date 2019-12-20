function uniteUnique(...arr) {
    let sortedUnion = [];
   
    arr.map(element => {
        element.map(num=>{
            if(!sortedUnion.includes(num)){
                sortedUnion.push(num);
            }
            
        })
    });
    return sortedUnion;
}


uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);