import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { KanbanBoard, KanbanColumn, KanbanItem, KanbanColumnTemplate } from './cmacs-kanban-definitions';
export declare class CmacsKanbanComponent implements OnInit {
    /** Items to display  */
    board: KanbanBoard;
    multiselect: boolean;
    /**
     * Template for items to render. "item" object ist passed (see examples)
     * itemTemplate is for each column
     * itemTemplates is for change the template of a column
     */
    itemTemplate: TemplateRef<any>;
    itemTemplates: KanbanColumnTemplate[];
    /** Template for column headers. Current groupName will be passed (see examples) */
    columnHeaderTemplate: TemplateRef<any>;
    /** Template for column headers. Current groupName will be passed (see examples) */
    columnHeaderCollapsedTemplate: TemplateRef<any>;
    /** Shrink columns */
    showShrink: boolean;
    hasVerticalScroll: boolean;
    heightContainer: string;
    /** Templates for actions and description panels  */
    actionPanelTemplates: KanbanColumnTemplate[];
    descriptionPanelTemplates: KanbanColumnTemplate[];
    columnWidth: string;
    itemType: string;
    draggedItem: EventEmitter<object>;
    noDraggedItem: EventEmitter<KanbanItem>;
    onclickItem: EventEmitter<object>;
    ondblclickItem: EventEmitter<object>;
    selectionChange: EventEmitter<KanbanItem[]>;
    onColumnExpand: EventEmitter<KanbanColumn>;
    selectedItems: KanbanItem[];
    dragStartedColumn: KanbanColumn;
    constructor();
    ngOnInit(): void;
    getItemTemplate(id: string): TemplateRef<any>;
    getActionPanel(id: string): TemplateRef<any>;
    getDescriptionPanel(id: string): TemplateRef<any>;
    verticalScrollStyle(): any;
    boardStyle(): any;
    columnStyle(collapsed: boolean): any;
    columnExpand(column: KanbanColumn): any;
    columnCollapse(column: KanbanColumn): void;
    setDragStartedColumn(col: KanbanColumn): void;
    drop(event: CdkDragDrop<string[]>, columnId: string): void;
    private emitDroppedItem;
    clickItem(item: KanbanItem, columnId: string): void;
    dblclickItem(item: KanbanItem, columnId: string): void;
    isItemSelected(id: string): boolean;
}
