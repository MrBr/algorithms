import jest from 'jest-mock';

import bfs from './index';
import { Node }  from '../../helpers';

describe('breadth first', () => {
    test('finds the node in by respecting the neighbor (breadth) order', () => {
        //   1
        //  2 3
        // 4   5
        //      6
        const root = new Node(1)
          .addChild(new Node(2)
              .addChild(new Node(4)))
          .addChild(new Node(3)
            .addChild(new Node(5)
              .addChild(new Node(6))));

        const comparator = jest.fn((node) => node.value === 3);
        const searchedNode = bfs(root, comparator);

        expect(!!searchedNode).toBeTruthy();
        expect(comparator.mock.calls.length).toBe(3);
    });
});
