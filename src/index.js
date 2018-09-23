class Sorter {
  constructor() {
    this.arr = [];
    this.comparator = function (a, b) {
      return a > b ? 1 : a === b ? 0 : -1;
    }
  }

  add(element) {
   this.arr.push(element) ;
  }

  at(index) {
   return this.arr[index];     
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort();
    for (var i = 0; i < indices.length - 1; i++) {
      for (var j = i + 1; j < indices.length; j++) {
        if (this.comparator(this.arr[indices[i]], this.arr[indices[j]]) > 0) {
          var temp = this.arr[indices[i]];
          this.arr[indices[i]] = this.arr[indices[j]];
          this.arr[indices[j]] = temp;
        }
      }
    }
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;