import { OnInit, EventEmitter, OnChanges, Renderer2, ElementRef, TemplateRef, QueryList } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { ChartDataMulti } from '../core/interfaces/chart-data-interface';
import { UtilService } from '../core/services/util.service';
export declare class CmacsNormalizedHorizontalBarChartComponent implements OnInit, OnChanges {
    private renderer;
    private elementRef;
    private util;
    clickMenu: EventEmitter<any>;
    legendContent: ElementRef<any>;
    canvasRef: ElementRef;
    canvas: QueryList<ElementRef>;
    chartTooltip: string | TemplateRef<void> | null;
    data: ChartDataMulti[];
    view: number[];
    width: number;
    height: number;
    displayArrowBtns: boolean;
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
    showArrowBtns(): void;
    getSeriesValue(item: any, label: any): any;
    getDataTable(): ChartDataMulti[];
    getChartImage(): QueryList<ElementRef<any>>;
    getLegend(): string[];
}
