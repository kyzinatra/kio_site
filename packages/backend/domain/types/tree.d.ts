export interface ITree<T> {
    parent: T | null;
    children: ITree<T>[];
    data: T;
}

export interface IDoublyConnectedTree<T> {
    parent: ITree<T> | null;
    children: ITree<T>[];
    data: T;
}
