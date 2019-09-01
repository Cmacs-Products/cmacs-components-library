import { TemplateRef } from '@angular/core';
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
/**
 * Kanban Column id and TemplateRef
 */
export interface KanbanColumnTemplate {
    id: string;
    template: TemplateRef<any>;
}
