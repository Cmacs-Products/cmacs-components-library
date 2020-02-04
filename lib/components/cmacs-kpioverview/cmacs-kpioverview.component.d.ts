import { ElementRef, AfterViewInit } from '@angular/core';
import { KPI } from '../cmacs-kpi/cmacs-kpi.component';
import { DomSanitizer } from '@angular/platform-browser';
export declare class CmacsKPIOverviewComponent implements AfterViewInit {
    private sanitizer;
    data: KPI[];
    title: string;
    width: number;
    type: string;
    colors: string[];
    canvasRef: ElementRef;
    constructor(sanitizer: DomSanitizer);
    ngAfterViewInit(): void;
    drawPieSlice(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: any): void;
    drawArc(ctx: any, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number): void;
    sanitizeStyle(style: string): import("@angular/platform-browser").SafeStyle;
    getTotalCount(): number;
    getWidth(count: number): number;
    getColoredData(): any;
}
