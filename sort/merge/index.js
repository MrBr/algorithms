const mergeSort = (list, comparator) => {
  if (list.length === 1) {
    return list;
  }

  const left = [];
  const right = [];

  const midIndex = Math.ceil((list.length - 1) / 2);

  for (let i = 0; i < midIndex; i++) {
    left.push(list[i]);
  }
  for (let i = midIndex; i < list.length; i++) {
    right.push(list[i]);
  }

  const sortedLeft = mergeSort(left, comparator);
  const sortedRight = mergeSort(right, comparator);

  const sortedList = [];
  let leftIndex = 0;
  let rightIndex = 0;
  let leftDone = false;
  let rightDone = false;

  do {
    const leftItem = sortedLeft[leftIndex];
    const rightItem = sortedRight[rightIndex];
    const rel = leftDone ? 1 : rightDone ? -1 : comparator(leftItem, rightItem);

    if (rel === 0) {
      sortedList.push(leftItem);
      sortedList.push(rightItem);
      leftIndex += 1;
      rightIndex += 1;
    } else if (rel > 0) {
      sortedList.push(rightItem);
      rightIndex += 1;
    } else {
      sortedList.push(leftItem);
      leftIndex += 1;
    }

    leftDone = sortedLeft.length <= leftIndex;
    rightDone = sortedRight.length <= rightIndex;
  } while (!leftDone || !rightDone);

  return sortedList;
}

export default mergeSort;
