import { ITree } from '../types';
import { IDoublyConnectedTree } from '../types/tree';

export function treeForwardTraversal<T extends ITree<T['data']>>(
    tree: T,
    checkCallback: (tree: T['data']) => boolean
): ITree<T['data']> | void;

export function treeForwardTraversal<T extends IDoublyConnectedTree<T['data']>>(
    tree: T,
    checkCallback: (tree: T['data']) => boolean
): IDoublyConnectedTree<T['data']> | void;

export function treeForwardTraversal<T extends IDoublyConnectedTree<T['data']>>(
    tree: T,
    checkCallback: (tree: T['data']) => boolean
) {
    const step = (node: ITree<T['data']>): ITree<T['data']> | void => {
        if (checkCallback(node.data)) {
            return node;
        }

        for (let i = 0; i < node.children.length; i++) {
            let res = step(node.children[i]);

            if (res) {
                return res;
            }
        }
    };

    return step(tree);
}
