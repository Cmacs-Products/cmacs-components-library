/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
import { WidgetDataType } from '../core/enums/widget-type.enum';
var CmacsGeneralChartComponent = /** @class */ (function () {
    function CmacsGeneralChartComponent() {
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
                    template: "<!-- Grouped Chart -->\r\n<!-- ngx-charts-bar-vertical-2d -->\r\n<ngx-charts-bar-vertical-2d\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.multi\" [view]=\"view\"\r\n  [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [legendPosition]=\"legendPosition\" [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\"\r\n  [trimXAxisTicks]=\"true\" [roundDomains]=\"true\" [groupPadding]=\"1\" [barPadding]=\"1\">\r\n</ngx-charts-bar-vertical-2d>\r\n<!-- ngx-charts-bar-horizontal-2d -->\r\n<ngx-charts-bar-horizontal-2d\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.multi\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\"\r\n  [roundDomains]=\"true\" [legendPosition]=\"legendPosition\" [groupPadding]=\"1\" [barPadding]=\"1\">\r\n</ngx-charts-bar-horizontal-2d>\r\n<!-- ngx-charts-line-chart -->\r\n<ngx-charts-line-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.lineChart && dataType === WidgetDataTypeEnum.multi\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundDomains]=\"true\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-line-chart>\r\n<!-- Single Chart -->\r\n<!-- ngx-charts-bar-vertical -->\r\n<ngx-charts-bar-vertical\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.verticalBarChart && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\"\r\n  [roundDomains]=\"true\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-bar-vertical>\r\n<!-- ngx-charts-bar-horizontal -->\r\n<ngx-charts-bar-horizontal\r\n  *ngIf=\"chartSelected === WidgetActionTypeEnum.horizontalBarChart  && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [xAxis]=\"showXAxis\" [yAxis]=\"showYAxis\" [legend]=\"showLegend\"\r\n  [showXAxisLabel]=\"showXAxisLabel\" [showYAxisLabel]=\"showYAxisLabel\" [xAxisLabel]=\"xAxisLabel\"\r\n  [yAxisLabel]=\"yAxisLabel\" [legendTitle]=\"legendTitle\" [roundEdges]=\"false\" [trimXAxisTicks]=\"true\"\r\n  [roundDomains]=\"true\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-bar-horizontal>\r\n<!-- ngx-charts-pie-chart -->\r\n<ngx-charts-pie-chart *ngIf=\"chartSelected === WidgetActionTypeEnum.pieChart  && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"\r\n  [doughnut]=\"'true'\" [labels]=\"'true'\" [legendPosition]=\"legendPosition\">\r\n</ngx-charts-pie-chart>\r\n<!-- ngx-charts-gauge -->\r\n<ngx-charts-gauge *ngIf=\"chartSelected === WidgetActionTypeEnum.gauge && dataType === WidgetDataTypeEnum.single\"\r\n  [view]=\"view\" [scheme]=\"colorScheme\" [results]=\"data\" [legend]=\"showLegend\" [legendTitle]=\"legendTitle\"\r\n  [legendPosition]=\"legendPosition\" [bigSegments]=\"3\" [smallSegments]=\"0\"></ngx-charts-gauge>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    CmacsGeneralChartComponent.ctorParameters = function () { return []; };
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
    return CmacsGeneralChartComponent;
}());
export { CmacsGeneralChartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9jbWFjcy1jb21wb25lbnRzLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL2NtYWNzLWdlbmVyYWwtY2hhcnQvY21hY3MtZ2VuZXJhbC1jaGFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVoRTtJQWdDRTs7UUF4QlMsU0FBSSxHQUFVLEVBQUUsQ0FBQzs7UUFHakIsa0JBQWEsR0FBcUIsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUM7UUFDcEUsYUFBUSxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7UUFDakMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGNBQVMsR0FBRyxJQUFJLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBSWpCLGdCQUFXLEdBQUc7WUFDckIsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUM7U0FDMUMsQ0FBQztRQUVGLG1CQUFjLEdBQUcsT0FBTyxDQUFDO1FBQ3pCLHlCQUFvQixHQUFHLGdCQUFnQixDQUFDO1FBQ3hDLHVCQUFrQixHQUFHLGNBQWMsQ0FBQztJQUVwQixDQUFDOzs7O0lBRWpCLDZDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7O0lBRUQsOENBQVM7Ozs7SUFBVCxVQUFVLElBQXNCO1FBQzlCLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztTQUMzQjtJQUNILENBQUM7Ozs7O0lBRUQsb0RBQWU7Ozs7SUFBZixVQUFnQixJQUFzQjtRQUNwQyxPQUFPLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsa0JBQWtCO2VBQzVGLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxRQUFRLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLFNBQVMsSUFBSSxJQUFJLEtBQUssZ0JBQWdCLENBQUMsS0FBSyxDQUFDO0lBQ3BILENBQUM7O2dCQTlDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtvQkFDL0IscTRIQUFtRDs7aUJBRXBEOzs7Ozt1QkFJRSxLQUFLO2dDQUdMLEtBQUs7MkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzs0QkFDTCxLQUFLO2lDQUNMLEtBQUs7NkJBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBR0wsS0FBSzs4QkFDTCxLQUFLOztJQXdCUixpQ0FBQztDQUFBLEFBaERELElBZ0RDO1NBM0NZLDBCQUEwQjs7O0lBR3JDLDBDQUEwQjs7SUFHMUIsbURBQTZFOztJQUM3RSw4Q0FBMEM7O0lBQzFDLCtDQUEwQjs7SUFDMUIsb0RBQWdDOztJQUNoQyxnREFBeUI7O0lBQ3pCLCtDQUEwQjs7SUFDMUIsb0RBQWdDOztJQUNoQyxnREFBeUI7O0lBQ3pCLGdEQUEyQjs7SUFDM0IsaURBQTBCOztJQUcxQiwwQ0FBcUI7O0lBQ3JCLGlEQUVFOztJQUVGLG9EQUF5Qjs7SUFDekIsMERBQXdDOztJQUN4Qyx3REFBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5pbXBvcnQgeyBXaWRnZXREYXRhVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LXR5cGUuZW51bSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWdlbmVyYWwtY2hhcnQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1nZW5lcmFsLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1nZW5lcmFsLWNoYXJ0LmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NHZW5lcmFsQ2hhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyBjb250ZW50XHJcbiAgQElucHV0KCkgZGF0YTogYW55W10gPSBbXTtcclxuXHJcbiAgLy8gb3B0aW9uc1xyXG4gIEBJbnB1dCgpIGNoYXJ0U2VsZWN0ZWQ6IFdpZGdldEFjdGlvblR5cGUgPSBXaWRnZXRBY3Rpb25UeXBlLnZlcnRpY2FsQmFyQ2hhcnQ7XHJcbiAgQElucHV0KCkgZGF0YVR5cGUgPSBXaWRnZXREYXRhVHlwZS5zaW5nbGU7XHJcbiAgQElucHV0KCkgc2hvd1hBeGlzID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzaG93WEF4aXNMYWJlbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHhBeGlzTGFiZWwgPSAnJztcclxuICBASW5wdXQoKSBzaG93WUF4aXMgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNob3dZQXhpc0xhYmVsID0gZmFsc2U7XHJcbiAgQElucHV0KCkgeUF4aXNMYWJlbCA9ICcnO1xyXG4gIEBJbnB1dCgpIHNob3dMZWdlbmQgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIGxlZ2VuZFRpdGxlID0gJyc7XHJcblxyXG4gIC8vXHJcbiAgQElucHV0KCkgdmlldzogYW55W107XHJcbiAgQElucHV0KCkgY29sb3JTY2hlbWUgPSB7XHJcbiAgICBkb21haW46IFsnIzVBQTQ1NCcsICcjQzdCNDJDJywgJyNBQUFBQUEnXVxyXG4gIH07XHJcblxyXG4gIGxlZ2VuZFBvc2l0aW9uID0gJ2JlbG93JztcclxuICBXaWRnZXRBY3Rpb25UeXBlRW51bSA9IFdpZGdldEFjdGlvblR5cGU7XHJcbiAgV2lkZ2V0RGF0YVR5cGVFbnVtID0gV2lkZ2V0RGF0YVR5cGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hhcnRUeXBlTWVudSh0eXBlKSkge1xyXG4gICAgICB0aGlzLmNoYXJ0U2VsZWN0ZWQgPSB0eXBlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNDaGFydFR5cGVNZW51KHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnZlcnRpY2FsQmFyQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5ob3Jpem9udGFsQmFyQ2hhcnRcclxuICAgICAgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5waWVDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmxpbmVDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmdhdWdlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19