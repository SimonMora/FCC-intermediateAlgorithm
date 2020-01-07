function myReplace(str, before, after) {
    let helper = str.split(' ');
    let index = helper.indexOf(before);
    let regexMayus = /[A-Z]/;
    let regexMin = /[a-z]/;

    if( (before[0].match(regexMayus) && after[0].match(regexMayus)) ||
    (before[0].match(regexMin) && after[0].match(regexMin)) ){
        
        helper.splice(index,1,after);

    } else {

        if(before[0].match(regexMayus)){
            
            console.log("this : : " + before[0].match(regexMayus))
            let otro = after.split('');
            otro[0] = otro[0].toUpperCase();
            after = otro.join('');
            
            helper.splice(index,1,after);

        } else {

            let otro = after.split('');
            otro[0] = otro[0].toLowerCase();
            after = otro.join('');
            helper.splice(index,1,after);

        }
    }

    console.log(helper);
    return helper.join(" ");
}

myReplace("This has a spellngi error", "spellngi", "spelling");
myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
myReplace("Let us go to the store", "store", "mall");
myReplace("His name is Tom", "Tom", "john");
myReplace("Let us get back to more Coding", "Coding", "algorithms")