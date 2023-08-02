export enum abc {
    'a',
    'b',
    'c'
}

export interface abbb {
    [abc.b]: {
        body: { color: string };
        params: { user_id: string };
    };
    [abc['a']]: {
        body: { name: string; age: number };
        params: string;
    };
    [abc.c]: {
        hat: { name: string; age: number };
        params: string;
    };
}
