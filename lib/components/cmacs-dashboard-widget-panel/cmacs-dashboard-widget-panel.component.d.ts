import { OnInit, EventEmitter } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
export declare class CmacsDashboardWidgetPanelComponent implements OnInit {
    backgroundColor: string;
    widgetList: any[];
    widgetListChange: EventEmitter<any[]>;
    constructor();
    ngOnInit(): void;
    drop(event: CdkDragDrop<string[]>): void;
}
