import { ITree } from '../types';
import { makeTreeDoublyConnected } from './make-tree-doubly-connected';
import { IDoublyConnectedTree } from '../types/tree';
import { treeForwardTraversal } from './tree-forward-traversal';

export type IPathTree<T extends { data: object }> = IDoublyConnectedTree<T['data'] & { _id: string }>;

export const getPathFromTreeFromEnd = <T extends ITree<T['data'] & { _id: string }>>(
    initialTree: T,
    startId: string
) => {
    const tree = makeTreeDoublyConnected<ITree<T['data'] & { _id: string }>>(initialTree);
    const result: IPathTree<T>[] = [];

    const step = (node: IPathTree<T>, id: string): IDoublyConnectedTree<T> | void => {
        if (node.data._id === id) {
            result.push(node);
        }

        if (node.parent) {
            step(node.parent as IPathTree<T>, node.parent.data._id);
        }
    };

    const startNode = treeForwardTraversal(tree, ({ _id }) => _id === startId) as IPathTree<T>;

    step(treeForwardTraversal(tree, ({ _id }) => _id === startId) as IPathTree<T>, startNode.data._id);

    return result.reverse();
};
