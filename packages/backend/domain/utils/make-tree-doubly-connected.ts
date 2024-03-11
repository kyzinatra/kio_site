import { ITree } from '../types';
import { IDoublyConnectedTree } from '../types/tree';

export const makeTreeDoublyConnected = <T extends ITree<T['data']>>(
    initialTree: T
): IDoublyConnectedTree<T['data']> => {
    const tree = JSON.parse(JSON.stringify(initialTree)) as T;

    const step = (node: T, parentNode: T | null) => {
        node.parent = parentNode;

        for (let i = 0; i < node.children.length; i++) {
            step(node.children[i] as T, node);
        }
    };

    step(tree, null);

    return tree as IDoublyConnectedTree<T['data']>;
};
