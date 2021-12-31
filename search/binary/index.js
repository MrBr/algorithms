const binarySearch = (arr, comparator) => {
  let low = 0;
  let high = arr.length - 1;
  let current;
  let direction;

  while (high - low > 1) {
    current = Math.floor((high - low) / 2) + low;
    direction = comparator(arr[current]);

    if (direction === 0) {
      return current;
    } else if (direction > 0) {
      low = current;
    } else {
      high = current;
    }
  }

  const last = low === 0 ? low : high;
  direction = comparator(arr[last])

  return direction === 0 ? last : null;
}

export default binarySearch;
