import { OnInit, OnChanges, SimpleChanges } from '@angular/core';
import 'moment/locale/en-ie';
export declare class CmacsTimelineChartComponent implements OnInit, OnChanges {
    legendLabels: any[];
    colNames: Array<any>;
    data: Array<any>;
    width: number;
    height: number;
    options: {
        colors: string[];
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
    constructor();
    operateData(): void;
    createCustomTooltip(data: any, color: any): string;
}
