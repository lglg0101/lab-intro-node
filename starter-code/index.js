class SortedList {
  constructor(items, length) {
    this.items = []
    this.length = this.items.length
  }

  add(x) {
    this.items.push(x);
    this.length++;

  }

  get(i) {
    if (i <= this.length) {
      return this.items[i]
    } else {
      throw new Error('OutOfBounds');
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.max(...this.items);
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return Math.min(...this.items);
    }
  }

  sum() {
    let total = 0;
    for (let i = 0; i < this.length; i++) {
      total += this.items[i];
    }
    return total;
  }

  average() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.sum() / this.length;
    }
  }
}

module.exports = SortedList;