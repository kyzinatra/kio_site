import { ITree } from '../types';
import { makeTreeDoublyConnected } from './make-tree-doubly-connected';
import { IDoublyConnectedTree } from '../types/tree';
import { treeForwardTraversal } from './tree-forward-traversal';

export const getPathFromTreeFromEnd = <T extends ITree<T['data'] & { _id: string }>>(
    initialTree: T,
    startId: string
) => {
    const tree = makeTreeDoublyConnected(initialTree) as IDoublyConnectedTree<T['data'] & { _id: string }>;
    const result: IDoublyConnectedTree<T['data'] & { _id: string }>[] = [];

    const step = (
        node: IDoublyConnectedTree<T['data'] & { _id: string }>,
        id: string
    ): IDoublyConnectedTree<T['data']> | void => {
        if (node.data._id === id) {
            result.push(node);
        }

        if (node.parent) {
            //@ts-ignore
            step(node.parent, node.parent.data._id);
        }
    };

    const startNode = treeForwardTraversal(tree, ({ _id }) => _id === startId) as IDoublyConnectedTree<
        T['data'] & { _id: string }
    >;

    step(
        treeForwardTraversal(tree, ({ _id }) => _id === startId) as IDoublyConnectedTree<
            T['data'] & { _id: string }
        >,
        startNode.data._id
    );

    return result.reverse();
};
