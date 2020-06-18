import { OnInit, EventEmitter, OnChanges } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
export declare class CmacsNormalizedHorizontalBarChartComponent implements OnInit, OnChanges {
    private util;
    clickMenu: EventEmitter<any>;
    data: ChartDataMulti[];
    view: number[];
    minWidth: number;
    width: number;
    colorScheme: {
        domain: string[];
    };
    id: any;
    legend: string[];
    constructor(util: UtilService);
    ngOnInit(): void;
    ngOnChanges(): void;
    menuClick(type: WidgetActionType): void;
}
