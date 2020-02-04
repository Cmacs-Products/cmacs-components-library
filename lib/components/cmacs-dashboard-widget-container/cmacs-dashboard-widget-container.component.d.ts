import { OnInit, EventEmitter } from '@angular/core';
import { WidgetType, WidgetDataType } from '../core/enums/widget-type.enum';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
export declare class CmacsDashboardWidgetContainerComponent implements OnInit {
    headerText: string;
    footerText: string;
    footerValue: string;
    type: WidgetType;
    dataType: WidgetDataType;
    WidgetTypeEnum: typeof WidgetActionType;
    WidgetDataTypeEnum: typeof WidgetDataType;
    chartSelected: WidgetActionType;
    menuClick: EventEmitter<WidgetActionType>;
    constructor();
    ngOnInit(): void;
    onMenuClick(type: WidgetActionType): void;
    isChartTypeMenu(type: WidgetActionType): boolean;
}
