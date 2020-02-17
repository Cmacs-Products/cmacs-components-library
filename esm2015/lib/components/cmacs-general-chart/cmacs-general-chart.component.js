/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
export class CmacsGeneralChartComponent {
    constructor() {
        // content
        this.data = [];
        // options
        this.chartSelected = WidgetActionType.verticalBarChart;
        this.dataType = WidgetDataType.single;
        this.showXAxis = true;
        this.showXAxisLabel = false;
        this.xAxisLabel = '';
        this.showYAxis = true;
        this.showYAxisLabel = false;
        this.yAxisLabel = '';
        this.showLegend = true;
        this.legendTitle = '';
        this.colorScheme = {
            domain: ['#5AA454', '#C7B42C', '#AAAAAA']
        };
        this.legendPosition = 'below';
        this.WidgetActionTypeEnum = WidgetActionType;
        this.WidgetDataTypeEnum = WidgetDataType;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} type
     * @return {?}
     */
    menuClick(type) {
        if (this.isChartTypeMenu(type)) {
            this.chartSelected = type;
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    isChartTypeMenu(type) {
        return type === WidgetActionType.verticalBarChart || type === WidgetActionType.horizontalBarChart
            || type === WidgetActionType.pieChart || type === WidgetActionType.lineChart || type === WidgetActionType.gauge;
    }
}
CmacsGeneralChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cmacs-general-chart',
                template: "<!-- Grouped Chart -->\r\n<!-- ngx-charts-bar-vertical-2d -->\r\n<ngx-charts-bar-vertical-2d\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n  [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [legendPosition]=\"legendPosition\" [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\"\r\n  [trimXAxisTicks]=\"true\" [roundDomains]=\"true\" [groupPadding]=\"1\" [barPadding]=\"1\">\r\n</ngx-charts-bar-vertical-2d>\r\n<!-- ngx-charts-bar-horizontal-2d -->\r\n<ngx-charts-bar-horizontal-2d\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.multi\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\"\r\n  [roundDomains]=\"true\" [legendPosition]=\"legendPosition\" [groupPadding]=\"1\" [barPadding]=\"1\">\r\n</ngx-charts-bar-horizontal-2d>\r\n<!-- ngx-charts-line-chart -->\r\n<ngx-charts-line-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.lineChart && dataType === WidgetDataTypeEnum.multi\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundDomains]=\"true\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-line-chart>\r\n<!-- Single Chart -->\r\n<!-- ngx-charts-bar-vertical -->\r\n<ngx-charts-bar-vertical\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\"\r\n  [roundDomains]=\"true\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-bar-vertical>\r\n<!-- ngx-charts-bar-horizontal -->\r\n<ngx-charts-bar-horizontal\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\"\r\n  [roundDomains]=\"true\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-bar-horizontal>\r\n<!-- ngx-charts-pie-chart -->\r\n<ngx-charts-pie-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.pieChart  && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"\r\n  [doughnut]=\"'true'\" [labels]=\"'true'\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-pie-chart>\r\n<!-- ngx-charts-gauge -->\r\n<ngx-charts-gauge *ngIf=\"chartSelected === WidgetActionTypeEnum.gauge && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"\r\n  [legendPosition]=\"legendPosition\" [bigSegments]=\"3\" [smallSegments]=\"0\"></ngx-charts-gauge>",
                styles: [""]
            }] }
];
/** @nocollapse */
CmacsGeneralChartComponent.ctorParameters = () => [];
CmacsGeneralChartComponent.propDecorators = {
    data: [{ type: Input }],
    chartSelected: [{ type: Input }],
    dataType: [{ type: Input }],
    showXAxis: [{ type: Input }],
    showXAxisLabel: [{ type: Input }],
    xAxisLabel: [{ type: Input }],
    showYAxis: [{ type: Input }],
    showYAxisLabel: [{ type: Input }],
    yAxisLabel: [{ type: Input }],
    showLegend: [{ type: Input }],
    legendTitle: [{ type: Input }],
    view: [{ type: Input }],
    colorScheme: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.data;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.chartSelected;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.dataType;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.showXAxis;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.showXAxisLabel;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.xAxisLabel;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.showYAxis;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.showYAxisLabel;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.yAxisLabel;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.showLegend;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.legendTitle;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.view;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.colorScheme;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.legendPosition;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.WidgetActionTypeEnum;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.WidgetDataTypeEnum;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWdlbmVyYWwtY2hhcnQvY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU9oRSxNQUFNLE9BQU8sMEJBQTBCO0lBMkJyQzs7UUF4QlMsU0FBSSxHQUFVLEVBQUUsQ0FBQzs7UUFHakIsa0JBQWEsR0FBcUIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsYUFBUSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWpCLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQUVGLG1CQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLGNBQWMsQ0FBQztJQUVwQixDQUFDOzs7O0lBRWpCLFFBQVE7SUFDUixDQUFDOzs7OztJQUVELFNBQVMsQ0FBQyxJQUFzQjtRQUM5QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxJQUFzQjtRQUNwQyxPQUFPLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsa0JBQWtCO2VBQzVGLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLFNBQVMsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQ3BILENBQUM7OztZQTlDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IscTRIQUFtRDs7YUFFcEQ7Ozs7O21CQUlFLEtBQUs7NEJBR0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7NkJBQ0wsS0FBSzt5QkFDTCxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFHTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFoQk4sMENBQTBCOztJQUcxQixtREFBNkU7O0lBQzdFLDhDQUEwQzs7SUFDMUMsK0NBQTBCOztJQUMxQixvREFBZ0M7O0lBQ2hDLGdEQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQixvREFBZ0M7O0lBQ2hDLGdEQUF5Qjs7SUFDekIsZ0RBQTJCOztJQUMzQixpREFBMEI7O0lBRzFCLDBDQUFxQjs7SUFDckIsaURBRUU7O0lBRUYsb0RBQXlCOztJQUN6QiwwREFBd0M7O0lBQ3hDLHdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFdpZGdldERhdGFUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZ2VuZXJhbC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dlbmVyYWxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25zXHJcbiAgQElucHV0KCkgY2hhcnRTZWxlY3RlZDogV2lkZ2V0QWN0aW9uVHlwZSA9IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydDtcclxuICBASW5wdXQoKSBkYXRhVHlwZSA9IFdpZGdldERhdGFUeXBlLnNpbmdsZTtcclxuICBASW5wdXQoKSBzaG93WEF4aXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgeEF4aXNMYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dZQXhpcyA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSB5QXhpc0xhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd0xlZ2VuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgbGVnZW5kVGl0bGUgPSAnJztcclxuXHJcbiAgLy9cclxuICBASW5wdXQoKSB2aWV3OiBhbnlbXTtcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjNUFBNDU0JywgJyNDN0I0MkMnLCAnI0FBQUFBQSddXHJcbiAgfTtcclxuXHJcbiAgbGVnZW5kUG9zaXRpb24gPSAnYmVsb3cnO1xyXG4gIFdpZGdldEFjdGlvblR5cGVFbnVtID0gV2lkZ2V0QWN0aW9uVHlwZTtcclxuICBXaWRnZXREYXRhVHlwZUVudW0gPSBXaWRnZXREYXRhVHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFydFR5cGVNZW51KHR5cGUpKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRTZWxlY3RlZCA9IHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0NoYXJ0VHlwZU1lbnUodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmhvcml6b250YWxCYXJDaGFydFxyXG4gICAgICB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnBpZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUubGluZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUuZ2F1Z2U7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=