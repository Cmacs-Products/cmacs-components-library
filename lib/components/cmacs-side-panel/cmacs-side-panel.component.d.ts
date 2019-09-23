import { OnInit, EventEmitter, SimpleChanges, OnChanges } from '@angular/core';
export declare class CmacsSidePanelComponent implements OnInit, OnChanges {
    width: number | string;
    float: string;
    visible: boolean;
    collapsible: boolean;
    visibleChange: EventEmitter<boolean>;
    constructor();
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
