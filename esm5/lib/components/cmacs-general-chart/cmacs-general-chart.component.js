/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
var CmacsGeneralChartComponent = /** @class */ (function () {
    function CmacsGeneralChartComponent() {
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
        this.legendPosition = 'below';
        this.chartSelected = WidgetActionType.verticalBarChart;
        this.WidgetActionTypeEnum = WidgetActionType;
        this.WidgetDataTypeEnum = WidgetDataType;
    }
    /**
     * @return {?}
     */
    CmacsGeneralChartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsGeneralChartComponent.prototype.menuClick = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this.isChartTypeMenu(type)) {
            this.chartSelected = type;
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsGeneralChartComponent.prototype.isChartTypeMenu = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === WidgetActionType.verticalBarChart || type === WidgetActionType.horizontalBarChart
            || type === WidgetActionType.pieChart || type === WidgetActionType.lineChart || type === WidgetActionType.gauge;
    };
    CmacsGeneralChartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-general-chart',
                    template: "<cmacs-dashboard-widget-container \r\n  [headerText]=\"headerText\"\r\n  [footerText]=\"footerText\"\r\n  [footerValue]=\"footerValue\"\r\n  (menuClick)=\"menuClick($event)\"\r\n  [dataType]=\"dataType\">\r\n  <!-- Grouped Chart -->\r\n  <!-- ngx-charts-bar-vertical-2d -->\r\n  <ngx-charts-bar-vertical-2d *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [legendPosition]=\"legendPosition\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\"\r\n    [groupPadding]=\"1\" [barPadding]=\"1\">\r\n  </ngx-charts-bar-vertical-2d>\r\n  <!-- ngx-charts-bar-horizontal-2d -->\r\n  <ngx-charts-bar-horizontal-2d *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" \r\n    [roundDomains]=\"true\"  [legendPosition]=\"legendPosition\" [groupPadding]=\"1\" [barPadding]=\"1\">\r\n  </ngx-charts-bar-horizontal-2d>\r\n  <!-- ngx-charts-line-chart -->\r\n  <ngx-charts-line-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.lineChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n  [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [trimXAxisTicks]=\"true\"  \r\n  [roundDomains]=\"true\"  [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-line-chart>\r\n  <!-- Single Chart -->\r\n  <!-- ngx-charts-bar-vertical -->\r\n  <ngx-charts-bar-vertical *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.single\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" \r\n    [roundDomains]=\"true\"  [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-bar-vertical>\r\n  <!-- ngx-charts-bar-horizontal -->\r\n  <ngx-charts-bar-horizontal *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.single\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\" \r\n    [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-bar-horizontal>\r\n  <!-- ngx-charts-pie-chart -->\r\n  <ngx-charts-pie-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.pieChart  && dataType === WidgetDataTypeEnum.single\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n    [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\" [doughnut]=\"'true'\" [labels]=\"'true'\"  [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-pie-chart>\r\n  <!-- ngx-charts-gauge -->\r\n  <ngx-charts-gauge *ngIf=\"chartSelected === WidgetActionTypeEnum.gauge && dataType === WidgetDataTypeEnum.single\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n  [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"  [legendPosition]=\"legendPosition\"\r\n  [bigSegments]=\"3\" [smallSegments]=\"0\"></ngx-charts-gauge>\r\n</cmacs-dashboard-widget-container>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CmacsGeneralChartComponent.ctorParameters = function () { return []; };
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
    return CmacsGeneralChartComponent;
}());
export { CmacsGeneralChartComponent };
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
    CmacsGeneralChartComponent.prototype.legendPosition;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.chartSelected;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.WidgetActionTypeEnum;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.WidgetDataTypeEnum;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWdlbmVyYWwtY2hhcnQvY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRTtJQW9DRTs7UUE1QlMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDOztRQUVqQixTQUFJLEdBQVUsRUFBRSxDQUFDOztRQUdqQixhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFJakIsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBRUYsbUJBQWMsR0FBRyxPQUFPLENBQUM7UUFDekIsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNsRCx5QkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQztRQUN4Qyx1QkFBa0IsR0FBRyxjQUFjLENBQUM7SUFFcEIsQ0FBQzs7OztJQUVqQiw2Q0FBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDhDQUFTOzs7O0lBQVQsVUFBVSxJQUFzQjtRQUM5QixJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7OztJQUVELG9EQUFlOzs7O0lBQWYsVUFBZ0IsSUFBc0I7UUFDcEMsT0FBTyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsZ0JBQWdCLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLGtCQUFrQjtlQUM1RixJQUFJLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNwSCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxxQkFBcUI7b0JBQy9CLDB0SUFBbUQ7O2lCQUVwRDs7Ozs7NkJBSUUsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBRUwsS0FBSzsyQkFHTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzRCQUNMLEtBQUs7aUNBQ0wsS0FBSzs2QkFDTCxLQUFLOzZCQUNMLEtBQUs7OEJBQ0wsS0FBSzt1QkFHTCxLQUFLOzhCQUNMLEtBQUs7O0lBeUJSLGlDQUFDO0NBQUEsQUFwREQsSUFvREM7U0EvQ1ksMEJBQTBCOzs7SUFHckMsZ0RBQXlCOztJQUN6QixnREFBeUI7O0lBQ3pCLGlEQUEwQjs7SUFFMUIsMENBQTBCOztJQUcxQiw4Q0FBMEM7O0lBQzFDLCtDQUEwQjs7SUFDMUIsb0RBQWdDOztJQUNoQyxnREFBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQWdDOztJQUNoQyxnREFBeUI7O0lBQ3pCLGdEQUEyQjs7SUFDM0IsaURBQTBCOztJQUcxQiwwQ0FBcUI7O0lBQ3JCLGlEQUVFOztJQUVGLG9EQUF5Qjs7SUFDekIsbURBQWtEOztJQUNsRCwwREFBd0M7O0lBQ3hDLHdEQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXaWRnZXRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtYWN0aW9uLXR5cGUuZW51bSc7XHJcbmltcG9ydCB7IFdpZGdldERhdGFUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtdHlwZS5lbnVtJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtZ2VuZXJhbC1jaGFydCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdlbmVyYWwtY2hhcnQuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dlbmVyYWxDaGFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIC8vIGNvbnRhaW5lclxyXG4gIEBJbnB1dCgpIGhlYWRlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJUZXh0ID0gJyc7XHJcbiAgQElucHV0KCkgZm9vdGVyVmFsdWUgPSAnJztcclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gb3B0aW9uc1xyXG4gIEBJbnB1dCgpIGRhdGFUeXBlID0gV2lkZ2V0RGF0YVR5cGUuc2luZ2xlO1xyXG4gIEBJbnB1dCgpIHNob3dYQXhpcyA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1hBeGlzTGFiZWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSB4QXhpc0xhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaG93WUF4aXNMYWJlbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHlBeGlzTGFiZWwgPSAnJztcclxuICBASW5wdXQoKSBzaG93TGVnZW5kID0gdHJ1ZTtcclxuICBASW5wdXQoKSBsZWdlbmRUaXRsZSA9ICcnO1xyXG5cclxuICAvL1xyXG4gIEBJbnB1dCgpIHZpZXc6IGFueVtdO1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyM1QUE0NTQnLCAnI0M3QjQyQycsICcjQUFBQUFBJ11cclxuICB9O1xyXG5cclxuICBsZWdlbmRQb3NpdGlvbiA9ICdiZWxvdyc7XHJcbiAgY2hhcnRTZWxlY3RlZCA9IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydDtcclxuICBXaWRnZXRBY3Rpb25UeXBlRW51bSA9IFdpZGdldEFjdGlvblR5cGU7XHJcbiAgV2lkZ2V0RGF0YVR5cGVFbnVtID0gV2lkZ2V0RGF0YVR5cGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hhcnRUeXBlTWVudSh0eXBlKSkge1xyXG4gICAgICB0aGlzLmNoYXJ0U2VsZWN0ZWQgPSB0eXBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNDaGFydFR5cGVNZW51KHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnZlcnRpY2FsQmFyQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5ob3Jpem9udGFsQmFyQ2hhcnRcclxuICAgICAgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5waWVDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmxpbmVDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmdhdWdlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19