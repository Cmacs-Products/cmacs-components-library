import { OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
export declare class CmacsNormalizedHorizontalBarChartComponent implements OnInit, AfterViewInit {
    private util;
    clickMenu: EventEmitter<any>;
    headerText: string;
    footerText: string;
    footerValue: string;
    data: ChartDataMulti[];
    colorScheme: {
        domain: string[];
    };
    id: any;
    legend: string[];
    constructor(util: UtilService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    menuClick(type: WidgetActionType): void;
}
