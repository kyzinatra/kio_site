export interface ITree<T> {
    parent: { data: T } | null;
    children: ITree<T>[];
    data: T;
}

export interface IDoublyConnectedTree<T> {
    parent: ITree<T> | null;
    children: IDoublyConnectedTree<T>[];
    data: T;
}
