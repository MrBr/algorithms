import quickSort from './index';

describe('quick sort', () => {
  test('sorts the array', () => {
    const unsortedList = [1,0,5,6,3,2]

    const comparator = (left, right) => left - right;
    const sortedList = quickSort(unsortedList, comparator);

    expect(sortedList).toEqual([0,1,2,3,5,6]);
  });
});
