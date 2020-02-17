import { OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export declare class CmacsNormalizedHorizontalBarGroupedComponent implements OnInit, AfterViewInit {
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
    constructor(util: UtilService);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    menuClick(type: WidgetActionType): void;
    drawCanvas(): void;
}
