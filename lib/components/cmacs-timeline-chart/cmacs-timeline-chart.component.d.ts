import { OnInit, OnChanges, SimpleChanges, ChangeDetectorRef, OnDestroy } from '@angular/core';
import 'moment/locale/en-ie';
import { NzI18nService } from 'ng-zorro-antd';
export declare class CmacsTimelineChartComponent implements OnInit, OnChanges, OnDestroy {
    private cdr;
    private i18n;
    legendLabels: any[];
    colors: any;
    colNames: Array<any>;
    data: Array<any>;
    width: number;
    height: number;
    private destroy$;
    options: {
        colors: any;
        backgroundColor: string;
        avoidOverlappingGridLines: boolean;
        tooltip: {
            isHtml: boolean;
        };
        timeline: {
            rowLabelStyle: {
                color: string;
                fontName: string;
                fontSize: string;
            };
        };
    };
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    constructor(cdr: ChangeDetectorRef, i18n: NzI18nService);
    operateData(): void;
    createCustomTooltip(data: any, color: any): string;
    ngOnDestroy(): void;
}
