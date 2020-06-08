//迭代器

// Array.prototype[Symbol.iterator].next()


function each(data) {
  let iterator = data[Symbol.iterator]();
  let item = { done: false };
  while (!item.done) {
    item = iterator.next();
    if (!item.done) {
      console.log(item.value)
    }
  }
}

