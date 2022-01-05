const binarySearch = (arr, comparator) => {
  let low = 0;
  let high = arr.length - 1;
  let current;
  let direction;

  while (high - low >  -1) {
    current = Math.floor((high - low) / 2) + low;
    direction = comparator(arr[current]);

    if (direction === 0) {
      return current;
    } else if (direction > 0) {
      low = current + 1;
    } else {
      high = current - 1;
    }
  }

  return -1;
}

export default binarySearch;
