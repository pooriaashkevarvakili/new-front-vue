export interface Task {
    id: number,
    title: string,
    body?: string,
    tags?: Array<string>,
    created_at?: string,
    color?: string,
}
