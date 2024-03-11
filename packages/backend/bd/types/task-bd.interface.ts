export interface ITaskDB {
    _id: string;
    name: string;
    description: string;
    isAvailable: boolean;
    isApproved: boolean;
    settings: object;
    preview: string;
    creatorId: string;
    timestamp: number;
}
