export type TError<T> = {
    title: string;
    message: string;
    code: number;
    name: T;
};
