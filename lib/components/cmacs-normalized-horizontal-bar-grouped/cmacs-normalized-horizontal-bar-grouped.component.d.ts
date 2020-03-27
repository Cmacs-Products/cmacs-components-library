import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export declare class CmacsNormalizedHorizontalBarGroupedComponent implements OnInit, OnChanges {
    private util;
    clickMenu: EventEmitter<any>;
    data: ChartDataMulti[];
    colorScheme: {
        domain: string[];
    };
    id: any;
    legend: string[];
    selectList: string[];
    selectedValue: string;
    chartWidth: number;
    chartHeight: number;
    minWidth: number;
    minHeight: number;
    pw: number;
    ph: number;
    view: number[];
    constructor(util: UtilService);
    ngOnInit(): void;
    ngOnChanges(): void;
    menuClick(type: WidgetActionType): void;
    drawCanvas(): void;
}
