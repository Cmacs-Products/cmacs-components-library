import { OnInit, EventEmitter, OnChanges, Renderer2, ElementRef } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
export declare class CmacsNormalizedHorizontalBarChartComponent implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    private util;
    clickMenu: EventEmitter<any>;
    legendContent: ElementRef<any>;
    data: ChartDataMulti[];
    view: number[];
    width: number;
    height: number;
    colorScheme: {
        domain: string[];
    };
    id: any;
    legend: string[];
    constructor(renderer: Renderer2, elementRef: ElementRef, util: UtilService);
    ngOnInit(): void;
    ngOnChanges(): void;
    resize(): void;
    scrollRight(): void;
    scrollLeft(): void;
    menuClick(type: WidgetActionType): void;
}
