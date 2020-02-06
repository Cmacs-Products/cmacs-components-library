/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { WidgetType, WidgetDataType } from '../core/enums/widget-type.enum';
import { WidgetActionType } from '../core/enums/widget-action-type.enum';
var CmacsDashboardWidgetContainerComponent = /** @class */ (function () {
    function CmacsDashboardWidgetContainerComponent() {
        this.headerText = '';
        this.footerText = '';
        this.footerValue = '';
        this.type = WidgetType.general;
        this.dataType = WidgetDataType.single;
        this.showChartTypeOption = true;
        this.WidgetTypeEnum = WidgetActionType;
        this.WidgetDataTypeEnum = WidgetDataType;
        this.chartSelected = WidgetActionType.verticalBarChart;
        this.menuClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    CmacsDashboardWidgetContainerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsDashboardWidgetContainerComponent.prototype.onMenuClick = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this.isChartTypeMenu(type)) {
            this.chartSelected = type;
        }
        this.menuClick.emit(type);
    };
    /**
     * @param {?} type
     * @return {?}
     */
    CmacsDashboardWidgetContainerComponent.prototype.isChartTypeMenu = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        return type === WidgetActionType.verticalBarChart || type === WidgetActionType.horizontalBarChart
            || type === WidgetActionType.pieChart || type === WidgetActionType.lineChart || type === WidgetActionType.gauge;
    };
    CmacsDashboardWidgetContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cmacs-dashboard-widget-container',
                    template: "<div nz-row class=\"widget-header\">\r\n  <div nz-col nzSpan=\"17\" class=\"widget-header-title\"><span>{{headerText}}</span></div>\r\n  <div nz-col class=\"widget-header-actions\">\r\n    <button cmacs-button ghost><span class=\"iconUILarge-Calendar\"></span></button>\r\n    <cmacs-dropdown  [placement]=\"'bottomCenter'\" trigger=\"click\">\r\n      <button cmacs-button cmacs-dropdown ghost [action]=\"true\">\r\n        <i class=\"iconUILarge-More-horizontal\"></i>\r\n      </button>\r\n      <ul cmacs-menu>\r\n        <li cmacs-menu-item>\r\n          <a (click)=\"onMenuClick(WidgetTypeEnum.edit)\">\r\n            <i class=\"iconUISmall-Edit\"></i>\r\n            Edit\r\n          </a>\r\n        </li>\r\n        <li *ngIf=\"showChartTypeOption\" cmacs-submenu>\r\n          <span title>\r\n              <i class=\"iconUILarge-Reports\"></i>\r\n              Chart Type\r\n          </span>\r\n          <ul>\r\n            <li cmacs-menu-item>\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.verticalBarChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.verticalBarChart\"></i> Vertical Bar\r\n                Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item>\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.horizontalBarChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.horizontalBarChart\"></i>Horizontal Bar Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item *ngIf=\"dataType === WidgetDataTypeEnum.single\">\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.pieChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.pieChart\"></i>Pie Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item *ngIf=\"dataType === WidgetDataTypeEnum.multi\">\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.lineChart)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.lineChart\"></i>Line Chart\r\n              </a>\r\n            </li>\r\n            <li cmacs-menu-item *ngIf=\"dataType === WidgetDataTypeEnum.single\">\r\n              <a (click)=\"onMenuClick(WidgetTypeEnum.gauge)\">\r\n                <i [class.iconUILarge-Check_Mark_Icon]=\"chartSelected === WidgetTypeEnum.gauge\"></i>Gauge\r\n              </a>\r\n            </li>\r\n          </ul>\r\n        </li>\r\n        <li cmacs-submenu>\r\n          <span title>\r\n              <i class=\"iconArrowLarge-Export\"></i>\r\n              Export\r\n          </span>\r\n          <ul>\r\n            <li cmacs-menu-item>Option 1</li>\r\n          </ul>\r\n        </li>\r\n        <li cmacs-menu-item>\r\n          <a>\r\n            <i class=\"iconArrowLarge-Open\"></i>\r\n            Open in New Window\r\n          </a>\r\n        </li>\r\n        <li cmacs-menu-item>\r\n          <a>\r\n            <i class=\"iconUILarge-Trash\"></i>\r\n            Remove\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </cmacs-dropdown>\r\n  </div>\r\n</div>\r\n<div nz-row class=\"widget-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<div nz-row class=\"widget-footer\">\r\n  <span>{{footerText}}: <b>{{footerValue}}</b></span>\r\n</div>",
                    styles: [":host{width:310px;background-color:#fff;display:block;border-radius:3px;border:1px solid #dee0e5}.widget-header{height:44px;border-bottom:1px solid #dee0e5;padding:12px 20px}.widget-header-title{font-size:14px;font-family:Roboto;line-height:1.29;letter-spacing:normal;color:#3b3f46;max-width:calc(100% - 10px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;display:inline-block}.widget-header-actions{text-align:end;margin-top:-7px}.widget-header-actions>*{font-size:16px}.widget-footer{height:54px;border-top:1px solid #dee0e5;padding:15px;text-align:end}.widget-content{overflow-y:auto;overflow:overlay;margin-top:15px}.widget-content::-webkit-scrollbar{height:5px;width:5px}.widget-content::-webkit-scrollbar-thumb{background-color:#a1a1a1;border-radius:10px}.widget-content::-webkit-scrollbar-thumb:hover{background-color:#a1a1a1;border-radius:10px}"]
                }] }
    ];
    /** @nocollapse */
    CmacsDashboardWidgetContainerComponent.ctorParameters = function () { return []; };
    CmacsDashboardWidgetContainerComponent.propDecorators = {
        headerText: [{ type: Input }],
        footerText: [{ type: Input }],
        footerValue: [{ type: Input }],
        type: [{ type: Input }],
        dataType: [{ type: Input }],
        showChartTypeOption: [{ type: Input }],
        menuClick: [{ type: Output }]
    };
    return CmacsDashboardWidgetContainerComponent;
}());
export { CmacsDashboardWidgetContainerComponent };
if (false) {
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.headerText;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.footerText;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.footerValue;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.type;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.dataType;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.showChartTypeOption;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.WidgetTypeEnum;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.WidgetDataTypeEnum;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.chartSelected;
    /** @type {?} */
    CmacsDashboardWidgetContainerComponent.prototype.menuClick;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZGFzaGJvYXJkLXdpZGdldC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vY21hY3MtY29tcG9uZW50cy1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50cy9jbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lci9jbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUV6RTtJQW1CRTtRQVpTLGVBQVUsR0FBRyxFQUFFLENBQUM7UUFDaEIsZUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNoQixnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixTQUFJLEdBQUcsVUFBVSxDQUFDLE9BQU8sQ0FBQztRQUMxQixhQUFRLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQztRQUNqQyx3QkFBbUIsR0FBRyxJQUFJLENBQUM7UUFFcEMsbUJBQWMsR0FBRyxnQkFBZ0IsQ0FBQztRQUNsQyx1QkFBa0IsR0FBRyxjQUFjLENBQUM7UUFDcEMsa0JBQWEsR0FBRyxnQkFBZ0IsQ0FBQyxnQkFBZ0IsQ0FBQztRQUN4QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7SUFFM0MsQ0FBQzs7OztJQUVqQix5REFBUTs7O0lBQVI7SUFDQSxDQUFDOzs7OztJQUVELDREQUFXOzs7O0lBQVgsVUFBWSxJQUFzQjtRQUNoQyxJQUFJLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELGdFQUFlOzs7O0lBQWYsVUFBZ0IsSUFBc0I7UUFDcEMsT0FBTyxJQUFJLEtBQUssZ0JBQWdCLENBQUMsZ0JBQWdCLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLGtCQUFrQjtlQUM1RixJQUFJLEtBQUssZ0JBQWdCLENBQUMsUUFBUSxJQUFJLElBQUksS0FBSyxnQkFBZ0IsQ0FBQyxTQUFTLElBQUksSUFBSSxLQUFLLGdCQUFnQixDQUFDLEtBQUssQ0FBQztJQUNwSCxDQUFDOztnQkFsQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQ0FBa0M7b0JBQzVDLCt4R0FBZ0U7O2lCQUVqRTs7Ozs7NkJBR0UsS0FBSzs2QkFDTCxLQUFLOzhCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3NDQUNMLEtBQUs7NEJBS0wsTUFBTTs7SUFrQlQsNkNBQUM7Q0FBQSxBQW5DRCxJQW1DQztTQTlCWSxzQ0FBc0M7OztJQUVqRCw0REFBeUI7O0lBQ3pCLDREQUF5Qjs7SUFDekIsNkRBQTBCOztJQUMxQixzREFBbUM7O0lBQ25DLDBEQUEwQzs7SUFDMUMscUVBQW9DOztJQUVwQyxnRUFBa0M7O0lBQ2xDLG9FQUFvQzs7SUFDcEMsK0RBQWtEOztJQUNsRCwyREFBMkQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFdpZGdldFR5cGUsIFdpZGdldERhdGFUeXBlIH0gZnJvbSAnLi4vY29yZS9lbnVtcy93aWRnZXQtdHlwZS5lbnVtJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLWRhc2hib2FyZC13aWRnZXQtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1kYXNoYm9hcmQtd2lkZ2V0LWNvbnRhaW5lci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzRGFzaGJvYXJkV2lkZ2V0Q29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgaGVhZGVyVGV4dCA9ICcnO1xyXG4gIEBJbnB1dCgpIGZvb3RlclRleHQgPSAnJztcclxuICBASW5wdXQoKSBmb290ZXJWYWx1ZSA9ICcnO1xyXG4gIEBJbnB1dCgpIHR5cGUgPSBXaWRnZXRUeXBlLmdlbmVyYWw7XHJcbiAgQElucHV0KCkgZGF0YVR5cGUgPSBXaWRnZXREYXRhVHlwZS5zaW5nbGU7XHJcbiAgQElucHV0KCkgc2hvd0NoYXJ0VHlwZU9wdGlvbiA9IHRydWU7XHJcblxyXG4gIFdpZGdldFR5cGVFbnVtID0gV2lkZ2V0QWN0aW9uVHlwZTtcclxuICBXaWRnZXREYXRhVHlwZUVudW0gPSBXaWRnZXREYXRhVHlwZTtcclxuICBjaGFydFNlbGVjdGVkID0gV2lkZ2V0QWN0aW9uVHlwZS52ZXJ0aWNhbEJhckNoYXJ0O1xyXG4gIEBPdXRwdXQoKSBtZW51Q2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPFdpZGdldEFjdGlvblR5cGU+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25NZW51Q2xpY2sodHlwZTogV2lkZ2V0QWN0aW9uVHlwZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNDaGFydFR5cGVNZW51KHR5cGUpKSB7XHJcbiAgICAgIHRoaXMuY2hhcnRTZWxlY3RlZCA9IHR5cGU7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1lbnVDbGljay5lbWl0KHR5cGUpO1xyXG4gIH1cclxuXHJcbiAgaXNDaGFydFR5cGVNZW51KHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLnZlcnRpY2FsQmFyQ2hhcnQgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5ob3Jpem9udGFsQmFyQ2hhcnRcclxuICAgICAgfHwgdHlwZSA9PT0gV2lkZ2V0QWN0aW9uVHlwZS5waWVDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmxpbmVDaGFydCB8fCB0eXBlID09PSBXaWRnZXRBY3Rpb25UeXBlLmdhdWdlO1xyXG4gIH1cclxufVxyXG4iXX0=