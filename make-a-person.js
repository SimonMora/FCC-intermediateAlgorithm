var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
    let helper = firstAndLast.split(' ');
    let first = helper[0];
    let last = helper[1];

    this.getFullName = function() {
      return first + " " + last;
    };
  
    this.getFirstName = function(){
      return first;
    }
  
    this.getLastName = function(){
      return last;
    }
  
    this.setFirstName = function(otherFirst){
      first = otherFirst;
    }
  
    this.setLastName = function(otherLast){
      last = otherLast;
    }
  
    this.setFullName = function(newFirstAndLast) {
      let helper = newFirstAndLast.split(' ');
      first = helper[0];
      last = helper[1];
    };

    return firstAndLast;
  };
  
  var bob = new Person('Bob Ross');
  console.log(bob.getFullName());
  console.log(
    Object.keys(bob));

    bob.setFirstName('Dancing');
    console.log(bob.getFullName());
    
  
  