/**
 * Item to render
 */
export interface KanbanItem {
    id: string;
    disabled?: boolean;
    data?: any;
    columnId?: string;
}
/**
 * Columns
 */
export interface KanbanColumn {
    id: string;
    name: string;
    items: KanbanItem[];
}
/**
 * Board
 */
export interface KanbanBoard {
    name: string;
    columns: KanbanColumn[];
}
