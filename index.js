class SortedList {
  constructor(items, length) {
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.length=this.length+1;
    const items=this.items;
    items.push(item)
    items.sort((a,b)=>a>b?1:-1)
    this.items=items
  }
  get(pos) {
    if (pos >= this.length) {
      throw new Error("OutOfBounds");
      return;
    }
    return this.items[pos];
  }
  max() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
      return;
    }
    let number = Number.MIN_VALUE;
    this.items.map((item) => {
      if (item > number) {
        number = item;
      }
    });
    return number;
  }
  min() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
      return;
    }
    let number = Number.MAX_VALUE;
    this.items.map((item) => {
      if (item < number) {
        number = item;
      }
    });
    return number;
  }
  avg() {
    if (this.items.length === 0) {
      throw new Error("EmptySortedList");
      return;
    }
    let number=0;
    this.items.map(item=>{
      number+=item
    })
    return (number/this.length);
  }
  sum() {
    let number=0;
    this.items.map(item=>{
      number+=item
    })
    return number;
  }
}
module.exports = SortedList;
