import { EventEmitter, OnChanges } from '@angular/core';
export declare class CmacsComboSeriesVerticalComponent implements OnChanges {
    dims: any;
    type: string;
    series: any;
    seriesLine: any;
    xScale: any;
    yScale: any;
    colors: any;
    tooltipDisabled: boolean;
    gradient: boolean;
    activeEntries: any[];
    seriesName: string;
    animations: boolean;
    noBarWhenZero: boolean;
    select: EventEmitter<{}>;
    activate: EventEmitter<{}>;
    deactivate: EventEmitter<{}>;
    bandwidth: EventEmitter<{}>;
    bars: any;
    x: any;
    y: any;
    ngOnChanges(changes: any): void;
    update(): void;
    getSeriesTooltips(seriesLine: any, index: any): any;
    isActive(entry: any): boolean;
    onClick(data: any): void;
    trackBy(index: any, bar: any): string;
}
