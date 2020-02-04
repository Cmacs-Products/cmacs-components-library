/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
export class CmacsGeneralChartComponent {
    constructor() {
        // container
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        // content
        this.data = [];
        // options
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
        this.chartSelected = WidgetActionType.verticalBarChart;
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
                template: "<cmacs-dashboard-widget-container \r\n  [headerText]=\"headerText\"\r\n  [footerText]=\"footerText\"\r\n  [footerValue]=\"footerValue\"\r\n  (menuClick)=\"menuClick($event)\"\r\n  [dataType]=\"dataType\">\r\n  <!-- Grouped Chart -->\r\n  <!-- ngx-charts-bar-vertical-2d -->\r\n  <ngx-charts-bar-vertical-2d *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\">\r\n  </ngx-charts-bar-vertical-2d>\r\n  <!-- ngx-charts-bar-horizontal-2d -->\r\n  <ngx-charts-bar-horizontal-2d *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\">\r\n  </ngx-charts-bar-horizontal-2d>\r\n  <!-- ngx-charts-line-chart -->\r\n  <ngx-charts-line-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.lineChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n  [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [trimXAxisTicks]=\"true\"  [roundDomains]=\"true\">\r\n  </ngx-charts-line-chart>\r\n  <!-- Single Chart -->\r\n  <!-- ngx-charts-bar-vertical -->\r\n  <ngx-charts-bar-vertical *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.single\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\">\r\n  </ngx-charts-bar-vertical>\r\n  <!-- ngx-charts-bar-horizontal -->\r\n  <ngx-charts-bar-horizontal *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.single\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\">\r\n  </ngx-charts-bar-horizontal>\r\n  <!-- ngx-charts-pie-chart -->\r\n  <ngx-charts-pie-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.pieChart  && dataType === WidgetDataTypeEnum.single\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n    [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\" [doughnut]=\"'true'\" [labels]=\"'true'\">\r\n  </ngx-charts-pie-chart>\r\n  <!-- ngx-charts-gauge -->\r\n  <ngx-charts-gauge *ngIf=\"chartSelected === WidgetActionTypeEnum.gauge && dataType === WidgetDataTypeEnum.single\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n  [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"></ngx-charts-gauge>\r\n</cmacs-dashboard-widget-container>",
                styles: [""]
            }] }
];
/** @nocollapse */
CmacsGeneralChartComponent.ctorParameters = () => [];
CmacsGeneralChartComponent.propDecorators = {
    headerText: [{ type: Input }],
    footerText: [{ type: Input }],
    footerValue: [{ type: Input }],
    data: [{ type: Input }],
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
    CmacsGeneralChartComponent.prototype.headerText;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.footerText;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.footerValue;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.data;
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
    CmacsGeneralChartComponent.prototype.chartSelected;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.WidgetActionTypeEnum;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.WidgetDataTypeEnum;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWdlbmVyYWwtY2hhcnQvY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU9oRSxNQUFNLE9BQU8sMEJBQTBCO0lBOEJyQzs7UUEzQlMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDOztRQUVqQixTQUFJLEdBQVUsRUFBRSxDQUFDOztRQUdqQixhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFJakIsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBRUYsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCx5QkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxjQUFjLENBQUM7SUFFcEIsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBc0I7UUFDOUIsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsSUFBc0I7UUFDcEMsT0FBTyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsZ0JBQWdCLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLGtCQUFrQjtlQUM1RixJQUFJLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNwSCxDQUFDOzs7WUFqREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLHF6SEFBbUQ7O2FBRXBEOzs7Ozt5QkFJRSxLQUFLO3lCQUNMLEtBQUs7MEJBQ0wsS0FBSzttQkFFTCxLQUFLO3VCQUdMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUdMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQW5CTixnREFBeUI7O0lBQ3pCLGdEQUF5Qjs7SUFDekIsaURBQTBCOztJQUUxQiwwQ0FBMEI7O0lBRzFCLDhDQUEwQzs7SUFDMUMsK0NBQTBCOztJQUMxQixvREFBZ0M7O0lBQ2hDLGdEQUF5Qjs7SUFDekIsK0NBQTBCOztJQUMxQixvREFBZ0M7O0lBQ2hDLGdEQUF5Qjs7SUFDekIsZ0RBQTJCOztJQUMzQixpREFBMEI7O0lBRzFCLDBDQUFxQjs7SUFDckIsaURBRUU7O0lBRUYsbURBQWtEOztJQUNsRCwwREFBd0M7O0lBQ3hDLHdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFdpZGdldERhdGFUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZ2VuZXJhbC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dlbmVyYWxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIGNvbnRhaW5lclxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gb3B0aW9uc1xyXG4gIEBJbnB1dCgpIGRhdGFUeXBlID0gV2lkZ2V0RGF0YVR5cGUuc2luZ2xlO1xyXG4gIEBJbnB1dCgpIHNob3dYQXhpcyA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1hBeGlzTGFiZWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSB4QXhpc0xhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaG93WUF4aXNMYWJlbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHlBeGlzTGFiZWwgPSAnJztcclxuICBASW5wdXQoKSBzaG93TGVnZW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBsZWdlbmRUaXRsZSA9ICcnO1xyXG5cclxuICAvL1xyXG4gIEBJbnB1dCgpIHZpZXc6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyM1QUE0NTQnLCAnI0M3QjQyQycsICcjQUFBQUFBJ11cclxuICB9O1xyXG5cclxuICBjaGFydFNlbGVjdGVkID0gV2lkZ2V0QWN0aW9uVHlwZS52ZXJ0aWNhbEJhckNoYXJ0O1xyXG4gIFdpZGdldEFjdGlvblR5cGVFbnVtID0gV2lkZ2V0QWN0aW9uVHlwZTtcclxuICBXaWRnZXREYXRhVHlwZUVudW0gPSBXaWRnZXREYXRhVHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFydFR5cGVNZW51KHR5cGUpKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRTZWxlY3RlZCA9IHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0NoYXJ0VHlwZU1lbnUodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmhvcml6b250YWxCYXJDaGFydFxyXG4gICAgICB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnBpZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUubGluZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUuZ2F1Z2U7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=