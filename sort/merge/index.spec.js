import mergeSort from './index';

describe('merge sort', () => {
  test('sorts the array', () => {
    const unsortedList = [1,0,5,6,3,2]

    const comparator = (left, right) => left - right;
    const sortedList = mergeSort(unsortedList, comparator);

    expect(sortedList).toEqual([0,1,2,3,5,6]);
  });
});
