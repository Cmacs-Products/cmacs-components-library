import { OnInit } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
export declare class CmacsGeneralChartComponent implements OnInit {
    data: any[];
    chartSelected: WidgetActionType;
    dataType: WidgetDataType;
    showXAxis: boolean;
    showXAxisLabel: boolean;
    xAxisLabel: string;
    showYAxis: boolean;
    showYAxisLabel: boolean;
    yAxisLabel: string;
    showLegend: boolean;
    legendTitle: string;
    view: number[];
    colorScheme: {
        domain: string[];
    };
    legendPosition: string;
    WidgetActionTypeEnum: typeof WidgetActionType;
    WidgetDataTypeEnum: typeof WidgetDataType;
    constructor();
    ngOnInit(): void;
    menuClick(type: WidgetActionType): void;
    isChartTypeMenu(type: WidgetActionType): boolean;
}
