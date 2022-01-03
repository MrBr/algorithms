const quickSort = (list, comparator, pivotIndex = 0, end = list.length  - 1) => {
  const pivotItem = list[pivotIndex];
  let leftIndex = pivotIndex + 1;
  let rightIndex = end;

  const partitionLength = Math.abs(pivotIndex - rightIndex);
  if (partitionLength === 1 && comparator(list[pivotIndex], list[leftIndex]) > 0) {
    // Two elements remaining; have to be sorted
    list[pivotIndex] = list[leftIndex];
    list[leftIndex] = pivotItem;
    return list;
  } else if (partitionLength <= 1) {
    // Two or fewer elements remaining; don't need sorting
    return list;
  }

  let isDone = false;
  let replacementIndex = pivotIndex;
  do {
    const leftItem = list[leftIndex];
    const leftRel = comparator(leftItem, pivotItem);

    isDone = leftIndex === rightIndex;
    if (leftRel >= 0) {
      while (!isDone) {
        let rightItem = list[rightIndex];
        let rightRel = comparator(rightItem, pivotItem);

        isDone = leftIndex === rightIndex;
        rightIndex -= 1;
        if (rightRel < 0) {
          list[leftIndex] = rightItem;
          list[rightIndex + 1] = leftItem;
          replacementIndex = leftIndex;
          break;
        }
      }
    } else {
      replacementIndex = leftIndex;
    }

    leftIndex += 1;
  } while (!isDone);

  list[pivotIndex] = list[replacementIndex];
  list[replacementIndex] = pivotItem;

  quickSort(list, comparator, pivotIndex, replacementIndex - 1);
  quickSort(list, comparator, replacementIndex + 1);

  return list;
}

export default quickSort;
