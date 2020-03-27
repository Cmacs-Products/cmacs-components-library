import { OnInit, EventEmitter, AfterViewInit, TemplateRef, OnChanges } from '@angular/core';
import { UtilService } from '../core/services/util.service';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export declare class CmacsStatusDistributionComponent implements OnInit, AfterViewInit, OnChanges {
    private util;
    columnTemplate: TemplateRef<{}>;
    clickMenu: EventEmitter<any>;
    view: number[];
    data: any[];
    columnsHeader: string[];
    col2: number;
    col3: number;
    minWidth: number;
    chartWidth: number;
    showChart: boolean;
    scrollY: number;
    p: number;
    scroll: {
        x: string;
        y: string;
    };
    id: any;
    dataTable: any[];
    configurationExpandableRows: any;
    constructor(util: UtilService);
    ngOnInit(): void;
    ngOnChanges(): void;
    ngAfterViewInit(): void;
    setScroll(): void;
    menuClick(type: WidgetActionType): void;
    setConfiguration(): void;
    setData(): void;
    drawCanvas(): void;
}
