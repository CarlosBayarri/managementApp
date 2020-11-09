export interface Task {
    id?: string;
    title?: string;
    description?: string;
    date_origin?: string;
    date_to_end?: string;
    date_final?: string;
    type?: number;
    participants?: Array<string>;
}