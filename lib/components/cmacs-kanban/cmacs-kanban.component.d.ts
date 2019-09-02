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
    hasVerticalScroll: boolean;
    heightContainer: string;
    /** Templates for actions and description panels  */
    actionPanelTemplates: KanbanColumnTemplate[];
    descriptionPanelTemplates: KanbanColumnTemplate[];
    columnWidth: string;
    draggedItem: EventEmitter<object>;
    onclickItem: EventEmitter<object>;
    ondblclickItem: EventEmitter<object>;
    selectionChange: EventEmitter<KanbanItem[]>;
    selectedItems: KanbanItem[];
    dragStartedColumn: KanbanColumn;
    constructor();
    ngOnInit(): void;
    getItemTemplate(id: string): TemplateRef<any>;
    getActionPanel(id: string): TemplateRef<any>;
    getDescriptionPanel(id: string): TemplateRef<any>;
    verticalScrollStyle(): any;
    columnStyle(): any;
    setDragStartedColumn(col: KanbanColumn): void;
    drop(event: CdkDragDrop<string[]>, columnId: string): void;
    clickItem(item: KanbanItem): void;
    dblclickItem(item: object): void;
    isItemSelected(id: string): boolean;
}
