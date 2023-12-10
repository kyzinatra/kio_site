import { ITree } from '../types';
import { IDoublyConnectedTree } from '../types/tree';

export const makeTreeDoublyConnected = <T extends ITree<T['data']>>(
    initialTree: T
): IDoublyConnectedTree<T> => {
    const tree = JSON.parse(JSON.stringify(initialTree));

    const step = (node: ITree<T>, parentNode: ITree<T> | null) => {
        //@ts-ignore
        node.parent = parentNode;

        for (let i = 0; i < node.children.length; i++) {
            step(node.children[i], node);
        }
    };

    step(tree, null);

    return tree;
};
