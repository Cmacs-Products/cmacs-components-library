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
                template: "<cmacs-dashboard-widget-container \r\n  [headerText]=\"headerText\"\r\n  [footerText]=\"footerText\"\r\n  [footerValue]=\"footerValue\"\r\n  (menuClick)=\"menuClick($event)\"\r\n  [dataType]=\"dataType\">\r\n  <!-- Grouped Chart -->\r\n  <!-- ngx-charts-bar-vertical-2d -->\r\n  <ngx-charts-bar-vertical-2d *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\" [legendPosition]=\"legendPosition\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\"\r\n    [groupPadding]=\"1\" [barPadding]=\"1\">\r\n  </ngx-charts-bar-vertical-2d>\r\n  <!-- ngx-charts-bar-horizontal-2d -->\r\n  <ngx-charts-bar-horizontal-2d *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" \r\n    [roundDomains]=\"true\"  [legendPosition]=\"legendPosition\" [groupPadding]=\"1\" [barPadding]=\"1\">\r\n  </ngx-charts-bar-horizontal-2d>\r\n  <!-- ngx-charts-line-chart -->\r\n  <ngx-charts-line-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.lineChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n  [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\"\r\n  [roundDomains]=\"true\"  [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-line-chart>\r\n  <!-- Single Chart -->\r\n  <!-- ngx-charts-bar-vertical -->\r\n  <ngx-charts-bar-vertical *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.single\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" \r\n    [roundDomains]=\"true\"  [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-bar-vertical>\r\n  <!-- ngx-charts-bar-horizontal -->\r\n  <ngx-charts-bar-horizontal *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.single\" [view]=\"view\"\r\n    [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n    [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n    [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\" [roundDomains]=\"true\" \r\n    [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-bar-horizontal>\r\n  <!-- ngx-charts-pie-chart -->\r\n  <ngx-charts-pie-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.pieChart  && dataType === WidgetDataTypeEnum.single\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n    [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\" [doughnut]=\"'true'\" [labels]=\"'true'\"  [legendPosition]=\"legendPosition\">\r\n  </ngx-charts-pie-chart>\r\n  <!-- ngx-charts-gauge -->\r\n  <ngx-charts-gauge *ngIf=\"chartSelected === WidgetActionTypeEnum.gauge && dataType === WidgetDataTypeEnum.single\" [view]=\"view\" [scheme]=\"colorScheme\"\r\n  [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"  [legendPosition]=\"legendPosition\"\r\n  [bigSegments]=\"3\" [smallSegments]=\"0\"></ngx-charts-gauge>\r\n</cmacs-dashboard-widget-container>",
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
    CmacsGeneralChartComponent.prototype.headerText;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.footerText;
    /** @type {?} */
    CmacsGeneralChartComponent.prototype.footerValue;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWdlbmVyYWwtY2hhcnQvY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQU9oRSxNQUFNLE9BQU8sMEJBQTBCO0lBK0JyQzs7UUE1QlMsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGdCQUFXLEdBQUcsRUFBRSxDQUFDOztRQUVqQixTQUFJLEdBQVUsRUFBRSxDQUFDOztRQUdqQixrQkFBYSxHQUFxQixnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUNwRSxhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxjQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFJakIsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMxQyxDQUFDO1FBRUYsbUJBQWMsR0FBRyxPQUFPLENBQUM7UUFDekIseUJBQW9CLEdBQUcsZ0JBQWdCLENBQUM7UUFDeEMsdUJBQWtCLEdBQUcsY0FBYyxDQUFDO0lBRXBCLENBQUM7Ozs7SUFFakIsUUFBUTtJQUNSLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLElBQXNCO1FBQzlCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRUQsZUFBZSxDQUFDLElBQXNCO1FBQ3BDLE9BQU8sSUFBSSxLQUFLLGdCQUFnQixDQUFDLGdCQUFnQixJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxrQkFBa0I7ZUFDNUYsSUFBSSxLQUFLLGdCQUFnQixDQUFDLFFBQVEsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsU0FBUyxJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7SUFDcEgsQ0FBQzs7O1lBbERGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQiw4cklBQW1EOzthQUVwRDs7Ozs7eUJBSUUsS0FBSzt5QkFDTCxLQUFLOzBCQUNMLEtBQUs7bUJBRUwsS0FBSzs0QkFHTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSzs2QkFDTCxLQUFLO3lCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLO21CQUdMLEtBQUs7MEJBQ0wsS0FBSzs7OztJQXBCTixnREFBeUI7O0lBQ3pCLGdEQUF5Qjs7SUFDekIsaURBQTBCOztJQUUxQiwwQ0FBMEI7O0lBRzFCLG1EQUE2RTs7SUFDN0UsOENBQTBDOztJQUMxQywrQ0FBMEI7O0lBQzFCLG9EQUFnQzs7SUFDaEMsZ0RBQXlCOztJQUN6QiwrQ0FBMEI7O0lBQzFCLG9EQUFnQzs7SUFDaEMsZ0RBQXlCOztJQUN6QixnREFBMkI7O0lBQzNCLGlEQUEwQjs7SUFHMUIsMENBQXFCOztJQUNyQixpREFFRTs7SUFFRixvREFBeUI7O0lBQ3pCLDBEQUF3Qzs7SUFDeEMsd0RBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldEFjdGlvblR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC1hY3Rpb24tdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgV2lkZ2V0RGF0YVR5cGUgfSBmcm9tICcuLi9jb3JlL2VudW1zL3dpZGdldC10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1nZW5lcmFsLWNoYXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzR2VuZXJhbENoYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gY29udGFpbmVyXHJcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJWYWx1ZSA9ICcnO1xyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvLyBvcHRpb25zXHJcbiAgQElucHV0KCkgY2hhcnRTZWxlY3RlZDogV2lkZ2V0QWN0aW9uVHlwZSA9IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydDtcclxuICBASW5wdXQoKSBkYXRhVHlwZSA9IFdpZGdldERhdGFUeXBlLnNpbmdsZTtcclxuICBASW5wdXQoKSBzaG93WEF4aXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dYQXhpc0xhYmVsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgeEF4aXNMYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dZQXhpcyA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1lBeGlzTGFiZWwgPSBmYWxzZTtcclxuICBASW5wdXQoKSB5QXhpc0xhYmVsID0gJyc7XHJcbiAgQElucHV0KCkgc2hvd0xlZ2VuZCA9IHRydWU7XHJcbiAgQElucHV0KCkgbGVnZW5kVGl0bGUgPSAnJztcclxuXHJcbiAgLy9cclxuICBASW5wdXQoKSB2aWV3OiBhbnlbXTtcclxuICBASW5wdXQoKSBjb2xvclNjaGVtZSA9IHtcclxuICAgIGRvbWFpbjogWycjNUFBNDU0JywgJyNDN0I0MkMnLCAnI0FBQUFBQSddXHJcbiAgfTtcclxuXHJcbiAgbGVnZW5kUG9zaXRpb24gPSAnYmVsb3cnO1xyXG4gIFdpZGdldEFjdGlvblR5cGVFbnVtID0gV2lkZ2V0QWN0aW9uVHlwZTtcclxuICBXaWRnZXREYXRhVHlwZUVudW0gPSBXaWRnZXREYXRhVHlwZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBtZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFydFR5cGVNZW51KHR5cGUpKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRTZWxlY3RlZCA9IHR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc0NoYXJ0VHlwZU1lbnUodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUudmVydGljYWxCYXJDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmhvcml6b250YWxCYXJDaGFydFxyXG4gICAgICB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnBpZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUubGluZUNoYXJ0IHx8IHR5cGUgPT09IFdpZGdldEFjdGlvblR5cGUuZ2F1Z2U7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=