const quickSort = (list, comparator, pivotIndex = 0, end = list.length  - 1) => {
  const pivotItem = list[pivotIndex];
  let leftIndex = pivotIndex + 1;
  let rightIndex = end;

  const partitionLength = end - pivotIndex;
  if (partitionLength <= 0) {
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
  quickSort(list, comparator, replacementIndex + 1, end);

  return list;
}

export default quickSort;
