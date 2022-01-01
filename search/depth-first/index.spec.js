import jest from 'jest-mock';

import dfs from './index';
import { Node }  from '../../helpers';

describe('breadth first', () => {
    test('finds the node in by respecting the depth order', () => {
        //    1
        //   2  3
        //  4  5  9
        // 6 7  8   10
        const root = new Node(1)
          .addChild(new Node(2)
              .addChild(new Node(4)
                  .addChild(new Node(6))
                  .addChild(new Node(7))
              )
              .addChild(new Node(5)
                .addChild(new Node(8)
                )
              )
          )
          .addChild(new Node(3)
            .addChild(new Node(9)
              .addChild(new Node(10))));

        const comparator = jest.fn((node) => node.value === 5);
        const searchedNode = dfs(root, comparator);

        expect(!!searchedNode).toBeTruthy();
        expect(comparator.mock.calls.length).toBe(6);
    });
});
