import { OnInit, EventEmitter, AfterViewInit, TemplateRef } from '@angular/core';
import { UtilService } from '../core/services/util.service';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export declare class CmacsStatusDistributionComponent implements OnInit, AfterViewInit {
    private util;
    columnTemplate: TemplateRef<{}>;
    clickMenu: EventEmitter<any>;
    data: any[];
    columnsHeader: string[];
    id: any;
    dataTable: any[];
    configurationExpandableRows: any;
    constructor(util: UtilService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    menuClick(type: WidgetActionType): void;
    setConfiguration(): void;
    setData(): void;
    drawCanvas(): void;
}
