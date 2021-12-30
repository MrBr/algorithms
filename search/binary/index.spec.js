const binarySearch = require('./index');

describe('binary search', () => {
    test('finds the first item in sorted list', () => {
        const list = [0,1,5,21,43];
        const searchedValue = 0;
        const searchedIndex = 0;
        const index = binarySearch( list, (val) => searchedValue - val);

        expect(index).toBe(searchedIndex);
    });
    test('finds item in sorted list', () => {
        const list = [0,1,5,21,43];
        const searchedValue = 5;
        const searchedIndex = 2;
        const index = binarySearch( list, (val) => searchedValue - val);

        expect(index).toBe(searchedIndex);
    });
    test('finds the last item in sorted list', () => {
        const list = [0,1,5,21,43];
        const searchedValue = 43;
        const searchedIndex = 4;
        const index = binarySearch( list, (val) => searchedValue - val);

        expect(index).toBe(searchedIndex);
    });
});
