/*Make a Person
Fill in the object constructor with the following methods below:
getFirstName() getLastName() getFullName() setFirstName(first) setLastName(last) setFullName(firstAndLast)

The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object. */
var Person = function(firstAndLast) {
  var arr = firstAndLast.split(" ");
  // Complete the method below and implement the others similarly
  this.setFirstName = function(first){
    this.FirstName = first;    
  },
  this.setLastName = function(last){
     this.LastName = last;
  },
  this.setFullName = function(firstAndLast){
    var splitter = firstAndLast.split(" "); 
    this.FirstName = splitter[0];
    console.log(this.FirstName);
    this.LastName = splitter[1];
  }, 
  this.getFirstName = function(){
     if(this.FirstName){
       return this.FirstName
     }
    
    else {
      return arr[0]
    }
  },
  this.getLastName = function(){
    if(this.LastName){
      return this.LastName
    }
    else{
      return arr[1]
    }
  },
   this.getFullName = function() {
      if (this.FirstName && this.LastName){
        return this.FirstName + " " + this.LastName;
      }
    else if (this.FirstName && !this.LastName){
       return this.FirstName + " " + arr[1];
    }
    else if (this.LastName && !this.FirstName){
      return arr[0] + " " + this.LastName
    }
    else{
      return firstAndLast;
    }   
  }
}

var bob = new Person('Bob Ross');
bob.setFullName("Test please");
console.log(bob.getFullName()); 