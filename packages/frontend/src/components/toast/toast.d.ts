export interface IToast {
    title: string;
    theme?: 'error' | 'info' | 'success';
    timeout?: string | number;
}