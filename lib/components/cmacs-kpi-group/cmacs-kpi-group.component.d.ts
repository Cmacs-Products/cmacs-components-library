import { OnInit, TemplateRef, EventEmitter, AfterViewInit, ElementRef } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export declare class CmacsKpiGroupComponent implements OnInit, AfterViewInit {
    columnTemplate: TemplateRef<{}>;
    canvasRef: ElementRef;
    clickMenu: EventEmitter<any>;
    headerText: string;
    footerText: string;
    footerValue: string;
    data: any[];
    columnsHeader: string[];
    width: number;
    dataTable: any[];
    configurationExpandableRows: any;
    loading: boolean;
    selectedItem: string;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    drawCanvas(): void;
    drawPieSlice(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number, color: any, lineWidth: number): void;
    getTotalCateg(data: any[]): number;
    setConfiguration(): void;
    setData(): void;
    getChildren(items: any[]): any[];
    menuClick(type: WidgetActionType): void;
    changeData(key: string): void;
}