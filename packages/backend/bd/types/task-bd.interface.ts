export interface ITaskDB {
    _id: string;
    name: string;
    description: string;
    isAvailable: boolean;
    settings: object;
    preview: string;
    creatorId: string;
    timestamp: number;
}
