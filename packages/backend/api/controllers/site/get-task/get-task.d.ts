export type IGetTaskDto = {
    taskId: string;
};

export type IGetTaskResponse = {
    id: string;
    name: string;
    description: string;
    isAvailable: boolean;
    isApproved: boolean;
    preview: string;
};
