class SortedList {
  //Progression-1
  constructor() {
    //the object has 2 properties, one is the items array
    //and the 2nd property is the length
    this.items = [],
    this.length = 0
  }

  //Progression-2
  add(data) {
  // adding values to the items array
   this.items.push(data);

   //Sorting the items array
   this.items.sort((n1,n2) => n1-n2);
   
   //update the length of the items array
   this.length = this.items.length;
  }

  //Progression-3
  get(index) {
    //if index is out of bounds
    if(index>this.length) throw new Error("OutOfBounds");

    //if valid index is considered
    else{
      return this.items.indexOf(index);
    }
  }

  //Progression-4
  //maximum element of the items array
  max() {
    //if the array is empty
    if(this.length == 0) throw new Error("EmptySortedList");
    //return the max element
    else{
      return Math.max(...this.items);
    }
  }

  //Progression-5
  //return the min element
  min() {
    //if the array is empty
    if(this.length == 0) throw new Error("EmptySortedList");
    //return the min element
    else{
      return Math.min(...this.items);
    }
  }
  

  //Progression-7 
  //return the sum of the array items
  sum() {
    if(this.length>0){
      return (this.items.reduce((result,i) => result = result + i,0));
    }
    else return 0;
  }

  //Progression-6
  //return average of the array items
  avg() {
    if(this.length>0){
      return (this.sum()/this.length);
    }
    else throw new Error("EmptySortedList");
   
  }
  
};

module.exports = SortedList;
