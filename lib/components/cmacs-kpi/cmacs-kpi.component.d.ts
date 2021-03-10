import { ElementRef, AfterViewInit } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";
export declare const KPI_COLORS: string[];
export declare const KPI_PRIORITY_COLORS: {
    high: string;
    medium: string;
    low: string;
};
export interface KPI {
    count: number;
    description: string;
    priority?: 'low' | 'high' | 'medium';
}
export declare class CmacsKpiComponent implements AfterViewInit {
    private sanitizer;
    data: KPI[];
    title: string;
    priority: boolean;
    type: 'line' | 'doughnut';
    width: number;
    showTotalCount: boolean;
    fixed: number;
    canvasRef: ElementRef;
    constructor(sanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    getColoredDataPriority(): any[];
    drawPieSlice(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: any): void;
    drawLine(ctx: any, startX: number, startY: number, endX: number, endY: number): void;
    drawArc(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number): void;
    sanitizeStyle(style: string): import("@angular/platform-browser").SafeStyle;
    getTotalCount(): number;
    getWidth(count: number): number;
    getColoredData(): any;
}
