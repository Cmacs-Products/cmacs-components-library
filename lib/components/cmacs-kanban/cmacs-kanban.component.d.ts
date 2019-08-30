import { EventEmitter, OnInit, TemplateRef } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { KanbanBoard, KanbanItem } from './cmacs-kanban-definitions';
export declare class CmacsKanbanComponent implements OnInit {
    /** Items to display  */
    board: KanbanBoard;
    /** Template for items to render. "item" object ist passed (see examples) */
    itemTemplate: TemplateRef<any>;
    /** Template for column headers. Current groupName will be passed (see examples) */
    columnHeaderTemplate: TemplateRef<any>;
    hasVerticalScroll: boolean;
    heightContainer: string;
    columnWidth: string;
    draggedItem: EventEmitter<object>;
    onclickItem: EventEmitter<object>;
    ondblclickItem: EventEmitter<object>;
    selectionChange: EventEmitter<KanbanItem[]>;
    selectedItems: KanbanItem[];
    constructor();
    ngOnInit(): void;
    verticalScrollStyle(): any;
    columnStyle(): any;
    drop(event: CdkDragDrop<string[]>, columnId: string): void;
    clickItem(item: KanbanItem): void;
    dblclickItem(item: object): void;
    isItemSelected(id: string): boolean;
}
