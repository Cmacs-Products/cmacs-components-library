import { EventEmitter } from '@angular/core';
import { FormControl } from "@angular/forms";
import { CdkDragDrop } from "@angular/cdk/drag-drop";
export interface MoveableListItem {
    display: string;
    hidden: boolean;
    editable: boolean;
}
export declare class CmacsMoveableListComponent {
    header: string;
    data: MoveableListItem[];
    dataChange: EventEmitter<MoveableListItem[]>;
    selectedChange: EventEmitter<number>;
    onEditIdx: number;
    allowEdition: boolean;
    rowSelectedIdx: number;
    formControl: FormControl;
    handleClick(e: Event): void;
    drop(event: CdkDragDrop<string[]>): void;
    switchToEditMode(row: any, index: number): void;
    stopEdition(): void;
    select(index: number): void;
    hideShow(index: number): void;
    remove(idx: number): void;
}
